import type { Album } from "../types/album"

const VITE_API_URL = import.meta.env.VITE_API_URL

export async function fetchAlbums(search: string): Promise<Album[]> {
    let url = VITE_API_URL
    if (search) {
        url = `${VITE_API_URL}?search=${search}`
    }
    const response = await fetch(url)

    if (!response.ok) {
        throw new Error("Failed to fetch albums")
    }

    const data = await response.json()
    return data.results
}
