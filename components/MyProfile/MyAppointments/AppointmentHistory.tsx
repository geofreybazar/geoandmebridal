import { Card, CardContent } from "@/components/ui/card";
import { Appointment } from "@/types/appointments";
import { formatDate } from "@/utils/dates/dates";

const statusStyles: Record<string, string> = {
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-600",
};

const AppointmentHistory = ({
  appointments,
}: {
  appointments: Appointment[];
}) => {
  return (
    <div className='space-y-6'>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        Appointment History
      </p>

      {appointments.map((appointment) => (
        <Card key={appointment._id}>
          <CardContent className='flex justify-between items-center '>
            {/* Left */}
            <div>
              <p className='text-sm font-medium capitalize'>
                {appointment.status}
              </p>

              <p className='text-xs text-muted-foreground mt-1'>
                {formatDate(appointment.selectedDate)} •{" "}
                {appointment.selectedTime}
              </p>
            </div>

            {/* Status */}
            <span
              className={`text-xs px-3 py-1 rounded-full ${
                statusStyles[appointment.status] ||
                "bg-[#F5F1EB] text-[#6F5C4D]"
              }`}
            >
              {appointment.status}
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default AppointmentHistory;
