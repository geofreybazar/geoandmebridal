import { useFormContext } from "react-hook-form";
import { BookAppointmentType } from "@/zodSchemas/appointment";

const TimeSlots = ({
  availableTime,
  selectedDate,
  loading,
  selectedTime,
}: {
  availableTime: string[];
  selectedDate: Date | null;
  loading: boolean;
  selectedTime: string | null;
}) => {
  const { setValue } = useFormContext<BookAppointmentType>();

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
      {availableTime.map((time) => {
        const isSelected = selectedTime === time;

        return (
          <button
            key={time}
            disabled={!selectedDate || loading}
            type='button'
            onClick={() =>
              setValue("selectedTime", time, { shouldValidate: true })
            }
            className={`
                  border rounded-md px-4 py-3 text-sm
                  transition
                  ${
                    isSelected
                      ? "bg-black text-offwhite border-black"
                      : "bg-white text-black border-black/10 hover:border-offwhite"
                  }
                `}
          >
            {time}
          </button>
        );
      })}
    </div>
  );
};

export default TimeSlots;
