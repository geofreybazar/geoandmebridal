import { GetBrides } from "@/services/brides";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetBrides = () => {
  const {
    data: infiniteBrides,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ["brides"],
    queryFn: ({ pageParam }) => GetBrides(pageParam),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => {
      return lastPage.nextCursor ?? undefined;
    },
  });

  return {
    infiniteBrides,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  };
};

export default useGetBrides;
