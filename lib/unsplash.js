const UNSPLASH_BASE_URL = 'https://api.unsplash.com/search/photos'

const imageCache = new Map()

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
 * Returns image data or null if unavailable.
 * Results are cached in-memory to avoid duplicate API calls during build.
 */
export async function fetchUnsplashImage(query) {
    if (!query) return null

    if (imageCache.has(query)) {
        return imageCache.get(query)
    }

    const accessKey = process.env.UNSPLASH_ACCESS_KEY
    if (!accessKey) {
        console.warn('UNSPLASH_ACCESS_KEY not set — skipping image fetch')
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

        imageCache.set(query, imageData)
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
