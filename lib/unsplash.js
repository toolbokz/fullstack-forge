import { fetchPexelsImage } from './pexels'
import { searchPixabayImages } from './pixabay'

const UNSPLASH_BASE_URL = 'https://api.unsplash.com/search/photos'

const imageCache = new Map()

/**
 * Normalize a Pixabay search result into the standard image shape
 * used by Unsplash/Pexels helpers ({ url, smallUrl, alt, photographer, profileUrl }).
 */
function normalizePixabayHit(hit) {
    if (!hit) return null
    return {
        url: hit.largeSrc || hit.src,
        smallUrl: hit.src,
        alt: hit.alt || '',
        photographer: hit.user,
        profileUrl: hit.pageURL,
    }
}

/**
 * Trigger Unsplash download event as required by API guidelines.
 * Fire-and-forget — does not block rendering.
 * See: https://help.unsplash.com/en/articles/2511258-guideline-triggering-a-download
 */
function triggerUnsplashDownload(downloadLocation, accessKey) {
    if (!downloadLocation || !accessKey) return
    fetch(`${downloadLocation}?client_id=${accessKey}`).catch(() => {
        // Silently ignore — download tracking is best-effort
    })
}

/**
 * Fetch a landscape image from Unsplash for the given query.
 * Falls back to Pexels, then Pixabay if Unsplash is unavailable.
 * Returns image data or null if all providers fail.
 * Results are cached in-memory to avoid duplicate API calls during build.
 */
export async function fetchUnsplashImage(query) {
    if (!query) return null

    if (imageCache.has(query)) {
        return imageCache.get(query)
    }

    // Try Unsplash first
    const unsplashResult = await _fetchFromUnsplash(query)
    if (unsplashResult) {
        imageCache.set(query, unsplashResult)
        return unsplashResult
    }

    // Fallback: Pexels
    const pexelsResult = await fetchPexelsImage(query)
    if (pexelsResult) {
        imageCache.set(query, pexelsResult)
        return pexelsResult
    }

    // Fallback: Pixabay
    const pixabayResults = await searchPixabayImages(query, 3)
    if (pixabayResults.length > 0) {
        const normalized = normalizePixabayHit(pixabayResults[0])
        if (normalized) {
            imageCache.set(query, normalized)
            return normalized
        }
    }

    return null
}

/**
 * Internal: fetch a single image directly from Unsplash.
 */
async function _fetchFromUnsplash(query) {
    const accessKey = process.env.UNSPLASH_ACCESS_KEY
    if (!accessKey) {
        console.warn('UNSPLASH_ACCESS_KEY not set — skipping Unsplash fetch')
        return null
    }

    try {
        const params = new URLSearchParams({
            query,
            per_page: '1',
            orientation: 'landscape',
        })

        const res = await fetch(`${UNSPLASH_BASE_URL}?${params}`, {
            headers: { Authorization: `Client-ID ${accessKey}` },
            next: { revalidate: 604800 },
        })

        if (!res.ok) {
            console.warn(`Unsplash API error: ${res.status} for query "${query}"`)
            return null
        }

        const data = await res.json()

        if (!data.results || data.results.length === 0) {
            console.warn(`No Unsplash results for query "${query}"`)
            return null
        }

        const photo = data.results[0]
        const imageData = {
            url: photo.urls.regular,
            smallUrl: photo.urls.small,
            alt: photo.alt_description || query,
            photographer: photo.user.name,
            profileUrl: `${photo.user.links.html}?utm_source=fullstack_forge&utm_medium=referral`,
            blurHash: photo.blur_hash,
            downloadLocation: photo.links.download_location,
        }

        // Trigger Unsplash download tracking (required by API guidelines)
        triggerUnsplashDownload(photo.links.download_location, accessKey)

        return imageData
    } catch (error) {
        console.warn(`Failed to fetch Unsplash image for "${query}":`, error.message)
        return null
    }
}

/**
 * Fetch multiple unique landscape images from Unsplash for a given query.
 * Returns an array of image data objects.
 */
export async function fetchUnsplashImages(query, count = 5) {
    if (!query) return []

    const cacheKey = `${query}__${count}`
    if (imageCache.has(cacheKey)) {
        return imageCache.get(cacheKey)
    }

    const accessKey = process.env.UNSPLASH_ACCESS_KEY
    if (!accessKey) {
        console.warn('UNSPLASH_ACCESS_KEY not set — skipping image fetch')
        return []
    }

    try {
        const params = new URLSearchParams({
            query,
            per_page: String(count),
            orientation: 'landscape',
        })

        const res = await fetch(`${UNSPLASH_BASE_URL}?${params}`, {
            headers: { Authorization: `Client-ID ${accessKey}` },
            next: { revalidate: 604800 },
        })

        if (!res.ok) {
            console.warn(`Unsplash API error: ${res.status} for query "${query}"`)
            return []
        }

        const data = await res.json()

        if (!data.results || data.results.length === 0) {
            console.warn(`No Unsplash results for query "${query}"`)
            return []
        }

        const images = data.results.map((photo) => ({
            url: photo.urls.regular,
            smallUrl: photo.urls.small,
            alt: photo.alt_description || query,
            photographer: photo.user.name,
            profileUrl: `${photo.user.links.html}?utm_source=fullstack_forge&utm_medium=referral`,
            blurHash: photo.blur_hash,
            downloadLocation: photo.links.download_location,
        }))

        // Trigger Unsplash download tracking for each photo (required by API guidelines)
        images.forEach((img) => triggerUnsplashDownload(img.downloadLocation, accessKey))

        imageCache.set(cacheKey, images)
        return images
    } catch (error) {
        console.warn(`Failed to fetch Unsplash images for "${query}":`, error.message)
        return []
    }
}
