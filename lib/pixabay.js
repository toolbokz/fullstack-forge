const PIXABAY_API_KEY = process.env.PIXABAY_API_KEY
const BASE_URL = 'https://pixabay.com/api'

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
        const url = `${BASE_URL}/videos/?key=${encodeURIComponent(PIXABAY_API_KEY)}&id=${encodeURIComponent(videoId)}`
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

/**
 * Search Pixabay for images by keyword.
 * Returns an array of image objects or empty array on failure.
 */
export async function searchPixabayImages(query, perPage = 4) {
    if (!PIXABAY_API_KEY) {
        console.warn('PIXABAY_API_KEY is not set')
        return []
    }

    try {
        const url = `${BASE_URL}/?key=${encodeURIComponent(PIXABAY_API_KEY)}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&per_page=${perPage}&safesearch=true`
        const res = await fetch(url, { next: { revalidate: 86400 } })
        if (!res.ok) return []

        const data = await res.json()
        if (!data.hits || data.hits.length === 0) return []

        return data.hits.map((hit) => ({
            id: hit.id,
            src: hit.webformatURL,
            largeSrc: hit.largeImageURL,
            alt: hit.tags,
            width: hit.webformatWidth,
            height: hit.webformatHeight,
            pageURL: hit.pageURL,
            user: hit.user,
        }))
    } catch (err) {
        console.error('Pixabay image search failed:', err)
        return []
    }
}

/**
 * Search Pixabay for videos by keyword.
 * Returns an array of video objects or empty array on failure.
 */
export async function searchPixabayVideos(query, perPage = 2) {
    if (!PIXABAY_API_KEY) {
        console.warn('PIXABAY_API_KEY is not set')
        return []
    }

    try {
        const url = `${BASE_URL}/videos/?key=${encodeURIComponent(PIXABAY_API_KEY)}&q=${encodeURIComponent(query)}&per_page=${perPage}&safesearch=true`
        const res = await fetch(url, { next: { revalidate: 86400 } })
        if (!res.ok) return []

        const data = await res.json()
        if (!data.hits || data.hits.length === 0) return []

        return data.hits.map((hit) => ({
            id: hit.id,
            small: hit.videos?.small?.url || null,
            medium: hit.videos?.medium?.url || null,
            large: hit.videos?.large?.url || null,
            pageURL: hit.pageURL,
            user: hit.user,
            tags: hit.tags,
        }))
    } catch (err) {
        console.error('Pixabay video search failed:', err)
        return []
    }
}
