import { formatDate } from "@/utils/dates/dates";
import { Card, CardContent } from "@/components/ui/card";
import { Appointment } from "@/types/appointments";

const ConfirmedAppointments = ({
  confirmed,
}: {
  confirmed: Appointment | undefined;
}) => {
  return (
    <>
      {confirmed && (
        <Card className='border border-porcelainBeige bg-ivoryVeil rounded-2xl'>
          <CardContent className='space-y-2'>
            <p className='text-xs uppercase text-muted-foreground'>
              Upcoming Appointment
            </p>

            <p className='text-sm font-medium text-warmTaupe'>
              {formatDate(confirmed.selectedDate)} • {confirmed.selectedTime}
            </p>

            <p className='text-xs text-muted-foreground'>
              Your consultation is confirmed.
            </p>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ConfirmedAppointments;
