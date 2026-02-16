import type { Album } from "../types/album"

interface AlbumCard {
    album: Album
}

export default function AlbumCard({ album }: AlbumCard) {
    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-lg transition">
            <p className="text-lg font-semibold">{album.title}</p>

            <p className="text-sm text-grey-500">
                Created: {album.created_at}
            </p>
        </div>
    )
}
