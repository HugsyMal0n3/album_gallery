import { useAlbums } from "../hooks/useAlbums";

export default function AlbumsPage() {
    const { data: albums, isLoading, isError, error } = useAlbums()

    if (isLoading) {
        return <p>Loading...</p>
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
        <div>
            <ul>
                {albums.map((album) => (
                    <li key={album.id}>
                        {album.title}
                        {album.created_at}
                    </li>
                ))}
            </ul>
        </div>
    )
}