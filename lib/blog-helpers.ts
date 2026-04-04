import { contentPlan } from './seo-data'

export const POSTS_PER_PAGE = 10

export type SortOrder = 'newest' | 'oldest'

const VALID_ORDERS: SortOrder[] = ['newest', 'oldest']

export function parseBlogParams(searchParams: Record<string, string | string[] | undefined>) {
    const rawPage = typeof searchParams.page === 'string' ? parseInt(searchParams.page, 10) : 1
    const rawOrder = typeof searchParams.order === 'string' ? searchParams.order : 'newest'

    const order: SortOrder = VALID_ORDERS.includes(rawOrder as SortOrder)
        ? (rawOrder as SortOrder)
        : 'newest'

    const totalPosts = contentPlan.length
    const totalPages = Math.max(1, Math.ceil(totalPosts / POSTS_PER_PAGE))
    const page = Math.max(1, Math.min(rawPage || 1, totalPages))

    return { page, order, totalPages, totalPosts }
}

export function getSortedPosts(order: SortOrder) {
    const sorted = [...contentPlan].sort((a: any, b: any) => {
        const dateA = new Date(a.datePublished || '2000-01-01').getTime()
        const dateB = new Date(b.datePublished || '2000-01-01').getTime()
        return order === 'newest' ? dateB - dateA : dateA - dateB
    })
    return sorted
}

export function getPagePosts(order: SortOrder, page: number) {
    const sorted = getSortedPosts(order)
    const start = (page - 1) * POSTS_PER_PAGE
    return sorted.slice(start, start + POSTS_PER_PAGE)
}

export function buildBlogUrl(page: number, order: SortOrder) {
    const params = new URLSearchParams()
    if (page > 1) params.set('page', String(page))
    if (order !== 'newest') params.set('order', order)
    const qs = params.toString()
    return `/blog${qs ? `?${qs}` : ''}`
}
