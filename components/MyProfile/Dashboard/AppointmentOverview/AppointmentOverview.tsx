import { Appointment } from "@/types/appointments";
import { parseISO, compareAsc } from "date-fns";
import Header from "./Header";
import ConfirmedAppointments from "./ConfirmedAppointments";
import PendingAppointments from "./PendingAppointments";

const AppointmentsOverview = ({
  appointments,
}: {
  appointments: Appointment[];
}) => {
  const sorted = [...appointments].sort((a, b) =>
    compareAsc(parseISO(a.selectedDate), parseISO(b.selectedDate)),
  );

  const confirmed = sorted.find((a) => a.status === "confirmed");
  const pendingList = sorted.filter((a) => a.status === "pending");

  if (!confirmed && pendingList.length === 0) return null;

  return (
    <div className='space-y-6'>
      {/* Header */}
      <Header />

      {/* Confirmed Appointments */}
      <ConfirmedAppointments confirmed={confirmed} />

      {/* Pending Appointments */}
      <PendingAppointments pendingList={pendingList} />
    </div>
  );
};

export default AppointmentsOverview;
