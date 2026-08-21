import Default from "@/components/SharedComponents/BookingAppointmentForm/DateAndTime/TimePicker/Default";
import LoadingTimeSkeleton from "@/components/SharedComponents/BookingAppointmentForm/DateAndTime/TimePicker/LoadingTimeSkeleton";
import NoAvailableTime from "@/components/SharedComponents/BookingAppointmentForm/DateAndTime/TimePicker/NoAvailableTime";
import TimeSlots from "./TimeSlots";
import { RescheduleAppointmentType } from "@/zodSchemas/appointment";
import { useFormContext, useWatch } from "react-hook-form";

const TimePicker = ({
  availableTime,
  loading,
  selectedDate,
}: {
  availableTime: string[] | undefined;
  loading: boolean;
  selectedDate: Date | null;
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<RescheduleAppointmentType>();

  const rescheduleTime = useWatch({
    control,
    name: "rescheduleTime",
  });

  return (
    <div>
      <label className='block text-sm tracking-wide text-black/60 mb-1'>
        Preferred Time
      </label>

      {errors.rescheduleTime?.message && (
        <p className='text-xs text-red-600 mb-3'>
          {errors.rescheduleTime.message}
        </p>
      )}

      {loading ? (
        <LoadingTimeSkeleton />
      ) : !availableTime ? (
        <Default />
      ) : availableTime.length === 0 ? (
        <NoAvailableTime />
      ) : (
        <TimeSlots
          availableTime={availableTime}
          selectedDate={selectedDate}
          loading={loading}
          selectedTime={rescheduleTime}
        />
      )}

      <p className='text-xs text-black/50 mt-3'>
        Time slots are subject to confirmation.
      </p>
    </div>
  );
};

export default TimePicker;
