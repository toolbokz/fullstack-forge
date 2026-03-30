import { NextResponse } from 'next/server'

export async function POST(request: Request) {
    try {
        const body = await request.json()
        const { event, properties } = body

        if (!event || typeof event !== 'string') {
            return NextResponse.json({ error: 'Invalid event' }, { status: 400 })
        }

        // Log server-side for now — can be extended to write to DB or external analytics
        console.log(`[Track] ${event}`, properties || {})

        return NextResponse.json({ success: true })
    } catch {
        return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
    }
}
