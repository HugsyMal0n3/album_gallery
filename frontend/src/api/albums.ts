import type { Album } from "../types/album"

const VITE_API_URL = "http://127.0.0.1:8000/api/albums/"

export async function fetchAlbums(): Promise<Album[]> {
    const response = await fetch(VITE_API_URL)

    if (!response.ok) {
        throw new Error("Failed to fetch albums")
    }

    const data = await response.json()
    return data.results
}