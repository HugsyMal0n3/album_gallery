import { useAlbums } from "../hooks/useAlbums";
import AlbumCard from "../components/AlbumCard";
import AlbumCardSkelton from "../components/AlbumCardSkeleton";
import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import { SearchInput } from "../components/SearchInput";

export default function AlbumsPage() {
    const [search, setSearch] = useState("")
    const debouncedSearch = useDebounce(search, 400)

    const { data: albums, isLoading, isError, error } = useAlbums(debouncedSearch)

    if (isLoading) {
        return (
            <div className="p-4">
                <SearchInput value={search} onChange={setSearch}
                />
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- 4">
                    {Array.from({ length: 12 }).map((_, index) => (
                        <AlbumCardSkelton key={index} />
                    ))}
                </div>
            </div>
        )
    }

    if (isError) {
        return (
            <div className="p-4">
                <SearchInput value={search} onChange={setSearch}
                />
                <p>Error: {error.message}</p>
            </div>
        )
    }

    if (!albums || albums.length === 0) {
        {
            return (
                <div className="p-4">
                    <SearchInput value={search} onChange={setSearch}
                    />
                    <p>No Albums</p>
                </div>)
        }
    }

    return (
        <div className="p-4">
            <SearchInput value={search} onChange={setSearch}
            />
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- 4">
                {albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                ))}
            </div>
        </div>
    )
}