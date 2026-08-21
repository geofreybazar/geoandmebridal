import { Card, CardContent } from "@/components/ui/card";
import { Appointment } from "@/types/appointments";
import { formatDate } from "@/utils/dates/dates";

const PendingAppointments = ({
  appointments,
}: {
  appointments: Appointment[];
}) => {
  return (
    <div className='space-y-6'>
      <p className='text-xs tracking-widest uppercase text-muted-foreground'>
        Awaiting Confirmation
      </p>

      {appointments.map((appointment) => (
        <Card key={appointment._id}>
          <CardContent className='flex justify-between items-center'>
            <div>
              <p className='text-sm font-medium'>Pending Confirmation</p>

              <p className='text-xs text-muted-foreground mt-1'>
                {formatDate(appointment.selectedDate)} •{" "}
                {appointment.selectedTime}
              </p>
            </div>

            <span className='text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700'>
              pending
            </span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PendingAppointments;
