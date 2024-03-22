import type { APIRoute } from 'astro'

const OPEN_CHARGE_MAP_API_KEY = import.meta.env.OPEN_CHARGE_MAP_API_KEY
const OPEN_CHARGE_MAP_API_URL = import.meta.env.OPEN_CHARGE_MAP_API_URL

// /poi/nearby/?latitude=${latitude}&longitude=${longitude}&maxresults=10&key=${apiKey}

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
      `${OPEN_CHARGE_MAP_API_URL}/poi/nearby/?latitude=${lat}&longitude=${lng}&maxresults=6&key=${OPEN_CHARGE_MAP_API_KEY}&distance=200`
    )

    if (!response.ok) {
      return new Response(JSON.stringify({ message: response.statusText }), {
        headers: { 'content-type': 'application/json' },
        status: response.status
      })
    }

    const data = await response.json()
    return new Response(JSON.stringify({ stations: data }), {})
  } catch (error: unknown) {
    console.error(`Error in /api GET method: ${error as string}`)
    return new Response(JSON.stringify({ message: 'deu ruim' }), {
      headers: { 'content-type': 'application/json' },
      status: 200
    })
  }
}
