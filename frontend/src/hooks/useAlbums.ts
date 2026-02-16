import { useQuery } from "@tanstack/react-query";
import { fetchAlbums } from "../api/albums";

export function useAlbums(search: string) {
    return useQuery({
        queryKey: ["albums", search],
        queryFn: () => fetchAlbums(search),
        staleTime: 1000 * 60 * 5
    })
}