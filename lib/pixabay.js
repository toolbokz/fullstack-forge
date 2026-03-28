const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY

/**
 * Fetch a video from the Pixabay API by video ID.
 * Returns the medium-size video URL or null on failure.
 */
export async function fetchPixabayVideo(videoId) {
    if (!PIXABAY_API_KEY) {
        console.warn('PIXABAY_API_KEY is not set')
        return null
    }

    try {
        const url = `https://pixabay.com/api/videos/?key=${encodeURIComponent(PIXABAY_API_KEY)}&id=${encodeURIComponent(videoId)}`
        const res = await fetch(url, { next: { revalidate: 86400 } })
        if (!res.ok) return null

        const data = await res.json()
        if (!data.hits || data.hits.length === 0) return null

        const hit = data.hits[0]
        return {
            medium: hit.videos?.medium?.url || null,
            large: hit.videos?.large?.url || null,
            small: hit.videos?.small?.url || null,
            pageURL: hit.pageURL,
            user: hit.user,
        }
    } catch (err) {
        console.error('Pixabay video fetch failed:', err)
        return null
    }
}
