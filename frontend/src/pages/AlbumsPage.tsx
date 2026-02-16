import { useAlbums } from "../hooks/useAlbums";
import AlbumCard from "../components/AlbumCard";
import AlbumCardSkelton from "../components/AlbumCardSkeleton";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function AlbumsPage() {
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebounce(search, 400)

    const { data: albums, isLoading, isError, error } = useAlbums(debouncedSearch)

    if (isLoading) {
        return (
            <div className="p-4">
                <div className="">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <AlbumCardSkelton key={index} />
                    ))}
                </div>
            </div>
        )
    }

    if (isError) {
        return <p>Error: {error.message}</p>
    }

    if (!albums || albums.length === 0) {
        {
            return <p>No albums found</p>
        }
    }

    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border rounded px-3 py-2 mb-4 w-full"
            />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- 4">
                {albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                ))}
            </div>
        </div>
    )
}