import { useMutation } from "@tanstack/react-query";

import { rescheduleAppointmentAction } from "@/actions/appointments";

const useRescheduleAppointment = () => {
  const {
    mutateAsync: rescheduleAppointment,
    isPending,
    isError,
    error,
    isSuccess,
  } = useMutation({
    mutationFn: rescheduleAppointmentAction,
  });

  return { rescheduleAppointment, isPending, isError, error, isSuccess };
};

export default useRescheduleAppointment;
