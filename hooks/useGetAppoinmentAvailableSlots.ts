import { useQuery } from "@tanstack/react-query";
import { GetAvailableTimeSlots } from "@/services/appointment";

const useGetAppoinmentAvailableSlots = (date: Date) => {
  const {
    data: availableTime,
    isLoading,
    isFetching,
    isError,
    error,
  } = useQuery({
    queryKey: ["availableTime", date],
    queryFn: () => GetAvailableTimeSlots(date),
    enabled: !!date,
  });

  return {
    availableTime,
    isLoading,
    isError,
    error,
    isFetching,
  };
};

export default useGetAppoinmentAvailableSlots;
