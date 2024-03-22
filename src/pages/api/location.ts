import type { APIRoute } from 'astro'

const OPEN_CAGE_API_KEY = import.meta.env.OPEN_CAGE_API_KEY
const OPEN_CAGE_API_URL = import.meta.env.OPEN_CAGE_API_URL

export const GET: APIRoute = async function get({ url }) {
  try {
    const searchParams = url.searchParams
    const lat = searchParams.get('lat')
    const lng = searchParams.get('lng')

    if (!lat || !lng) {
      return new Response(JSON.stringify({ message: 'deu ruim' }), {
        headers: { 'content-type': 'application/json' },
        status: 401
      })
    }

    const response = await fetch(
      `${OPEN_CAGE_API_URL}?key=${OPEN_CAGE_API_KEY}&q=${lat},${lng}&pretty=1&no_annotations=1`
    )

    if (!response.ok) {
      return new Response(JSON.stringify({ message: response.statusText }), {
        headers: { 'content-type': 'application/json' },
        status: response.status
      })
    }

    const data = await response.json()
    return new Response(JSON.stringify({ loc: data?.results[0].formatted }), {})
  } catch (error: unknown) {
    console.error(`Error in /api GET method: ${error as string}`)
    return new Response(JSON.stringify({ message: 'deu ruim' }), {
      headers: { 'content-type': 'application/json' },
      status: 200
    })
  }
}
