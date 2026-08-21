import { Card, CardContent } from "@/components/ui/card";
import { Appointment } from "@/types/appointments";
import { formatDate } from "@/utils/dates/dates";

const PendingAppointments = ({
  pendingList,
}: {
  pendingList: Appointment[];
}) => {
  return (
    <>
      {pendingList.length > 0 && (
        <div className='space-y-3'>
          <p className='text-xs uppercase text-muted-foreground'>
            Awaiting Confirmation
          </p>

          {pendingList.map((appointment) => (
            <Card
              key={appointment._id}
              className='border border-porcelainBeige rounded-xl'
            >
              <CardContent className='flex justify-between items-center'>
                <div>
                  <p className='text-sm'>
                    {formatDate(appointment.selectedDate)} •{" "}
                    {appointment.selectedTime}
                  </p>

                  <p className='text-xs text-muted-foreground'>
                    Awaiting confirmation from our atelier
                  </p>
                </div>

                <span className='text-xs px-3 py-1 rounded-full bg-yellow-100 text-yellow-700'>
                  pending
                </span>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </>
  );
};

export default PendingAppointments;
