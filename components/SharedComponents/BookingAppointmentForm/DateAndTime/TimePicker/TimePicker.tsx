import { useFormContext, useWatch } from "react-hook-form";
import { BookAppointmentType } from "@/zodSchemas/appointment";
import LoadingTimeSkeleton from "./LoadingTimeSkeleton";
import Default from "./Default";
import TimeSlots from "./TimeSlots";
import NoAvailableTime from "./NoAvailableTime";

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
  } = useFormContext<BookAppointmentType>();

  const selectedTime = useWatch({
    control,
    name: "selectedTime",
  });

  return (
    <div>
      <label className='block text-sm tracking-wide text-black/60 mb-1'>
        Preferred Time
      </label>

      {errors.selectedTime?.message && (
        <p className='text-xs text-red-600 mb-3'>
          {errors.selectedTime.message}
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
          selectedTime={selectedTime}
        />
      )}

      <p className='text-xs text-black/50 mt-3'>
        Time slots are subject to confirmation.
      </p>
    </div>
  );
};

export default TimePicker;
