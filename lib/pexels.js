const PEXELS_BASE_URL = 'https://api.pexels.com/v1/search'
const PEXELS_VIDEO_URL = 'https://api.pexels.com/videos/search'

const imageCache = new Map()
const videoCache = new Map()

/**
 * Fetch a landscape image from Pexels for the given query.
 * Returns image data or null if unavailable.
 * Results are cached in-memory to avoid duplicate API calls during build.
 */
export async function fetchPexelsImage(query) {
    if (!query) return null

    if (imageCache.has(query)) {
        return imageCache.get(query)
    }

    const apiKey = process.env.PEXELS_API_KEY
    if (!apiKey) {
        console.warn('PEXELS_API_KEY not set — skipping image fetch')
        return null
    }

    try {
        const params = new URLSearchParams({
            query,
            per_page: '1',
            orientation: 'landscape',
        })

        const res = await fetch(`${PEXELS_BASE_URL}?${params}`, {
            headers: { Authorization: apiKey },
            next: { revalidate: 604800 },
        })

        if (!res.ok) {
            console.warn(`Pexels API error: ${res.status} for query "${query}"`)
            return null
        }

        const data = await res.json()

        if (!data.photos || data.photos.length === 0) {
            console.warn(`No Pexels results for query "${query}"`)
            return null
        }

        const photo = data.photos[0]
        const imageData = {
            url: photo.src.large2x,
            smallUrl: photo.src.medium,
            alt: photo.alt || query,
            photographer: photo.photographer,
            profileUrl: photo.photographer_url,
        }

        imageCache.set(query, imageData)
        return imageData
    } catch (error) {
        console.warn(`Failed to fetch Pexels image for "${query}":`, error.message)
        return null
    }
}

/**
 * Fetch an HD video from Pexels for the given query.
 * Returns { url, width, height } or null if unavailable.
 * Prefers HD quality (w=1280); falls back to the first available file.
 */
export async function fetchPexelsVideo(query) {
    if (!query) return null

    if (videoCache.has(query)) {
        return videoCache.get(query)
    }

    const apiKey = process.env.PEXELS_API_KEY
    if (!apiKey) {
        console.warn('PEXELS_API_KEY not set — skipping video fetch')
        return null
    }

    try {
        const params = new URLSearchParams({
            query,
            per_page: '1',
            orientation: 'landscape',
        })

        const res = await fetch(`${PEXELS_VIDEO_URL}?${params}`, {
            headers: { Authorization: apiKey },
            next: { revalidate: 604800 },
        })

        if (!res.ok) {
            console.warn(`Pexels Video API error: ${res.status} for query "${query}"`)
            return null
        }

        const data = await res.json()

        if (!data.videos || data.videos.length === 0) {
            console.warn(`No Pexels video results for query "${query}"`)
            return null
        }

        const video = data.videos[0]
        const files = video.video_files || []

        // Prefer HD mp4
        const hd = files.find(f => f.quality === 'hd' && f.file_type === 'video/mp4')
        const fallback = files.find(f => f.file_type === 'video/mp4') || files[0]
        const chosen = hd || fallback

        if (!chosen) return null

        const videoData = {
            url: chosen.link,
            width: chosen.width,
            height: chosen.height,
        }

        videoCache.set(query, videoData)
        return videoData
    } catch (error) {
        console.warn(`Failed to fetch Pexels video for "${query}":`, error.message)
        return null
    }
}
