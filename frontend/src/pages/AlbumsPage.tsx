import { useAlbums } from "../hooks/useAlbums";
import AlbumCard from "../components/AlbumCard";
import AlbumCardSkelton from "../components/AlbumCardSkeleton";

export default function AlbumsPage() {
    const { data: albums, isLoading, isError, error } = useAlbums()

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
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- 4">
                {albums.map((album) => (
                    <AlbumCard key={album.id} album={album} />
                ))}
            </div>
        </div>
    )
}