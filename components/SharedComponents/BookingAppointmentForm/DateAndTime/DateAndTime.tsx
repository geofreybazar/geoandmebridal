import { useFormContext, useWatch } from "react-hook-form";
import useGetAppoinmentAvailableSlots from "@/hooks/useGetAppoinmentAvailableSlots";

import DatePicker from "./DatePicker";
import TimePicker from "./TimePicker/TimePicker";

import { BookAppointmentType } from "@/zodSchemas/appointment";

const DateAndTime = () => {
  const { control } = useFormContext<BookAppointmentType>();

  const selectedDate = useWatch({
    control,
    name: "selectedDate",
  });

  const { availableTime, isLoading: loading } =
    useGetAppoinmentAvailableSlots(selectedDate);

  return (
    <div className='flex flex-col gap-8'>
      {/* Date */}

      <DatePicker />

      {/* Time */}
      <TimePicker
        availableTime={availableTime}
        loading={loading}
        selectedDate={selectedDate}
      />
    </div>
  );
};

export default DateAndTime;
