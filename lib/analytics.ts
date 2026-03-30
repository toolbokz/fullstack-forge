/**
 * Analytics Tracking Library
 * Lightweight client-side event tracking for CTAs, tools, and lead capture.
 * Sends events to /api/track endpoint and logs to console in development.
 */

type EventName =
    | 'cta_click'
    | 'tool_used'
    | 'tool_started'
    | 'audit_requested'
    | 'lead_captured'
    | 'form_submitted'
    | 'blog_cta_click'
    | 'related_post_click'

interface TrackPayload {
    event: EventName
    properties?: Record<string, string | number | boolean>
}

/**
 * Track an event. In production, sends to /api/track.
 * In development, logs to console.
 */
export function track(event: EventName, properties: Record<string, string | number | boolean> = {}) {
    const payload: TrackPayload = { event, properties }

    if (process.env.NODE_ENV === 'development') {
        console.log('[Analytics]', event, properties)
    }

    // Fire-and-forget beacon
    if (typeof navigator !== 'undefined' && navigator.sendBeacon) {
        navigator.sendBeacon('/api/track', JSON.stringify(payload))
    } else if (typeof fetch !== 'undefined') {
        fetch('/api/track', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true,
        }).catch(() => { }) // Silently fail — analytics should never break UX
    }
}

/**
 * Track a CTA click with context.
 */
export function trackCta(ctaId: string, location: string) {
    track('cta_click', { ctaId, location, page: typeof window !== 'undefined' ? window.location.pathname : '' })
}

/**
 * Track tool usage.
 */
export function trackToolUsed(toolSlug: string) {
    track('tool_used', { toolSlug, page: typeof window !== 'undefined' ? window.location.pathname : '' })
}

/**
 * Track lead capture form submission.
 */
export function trackLeadCapture(source: string, formName: string) {
    track('lead_captured', { source, formName, page: typeof window !== 'undefined' ? window.location.pathname : '' })
}
