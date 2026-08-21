import { auth } from "@/auth";
import { GetClientAppointments } from "@/services/appointment";

import UpcomingAppointment from "@/components/MyProfile/MyAppointments/UpcomingAppointment";
import AppointmentHistory from "@/components/MyProfile/MyAppointments/AppointmentHistory";
import NoUpcomingAppointment from "@/components/MyProfile/MyAppointments/NoUpcomingAppointment";

import { parseISO, compareAsc, compareDesc } from "date-fns";
import PendingAppointments from "@/components/MyProfile/MyAppointments/PendingAppointments";
import UniversalHeader from "@/components/MyProfile/UniversalHeader";

const MyApoointmentsPage = async () => {
  const session = await auth();
  const userId = session?.user.clientId;

  if (!userId) {
    return <div>User not found</div>;
  }

  const appointments = await GetClientAppointments(userId);

  const pendingAppointments = appointments
    .filter((a) => a.status === "pending")
    .sort((a, b) =>
      compareAsc(parseISO(a.selectedDate), parseISO(b.selectedDate)),
    );

  const upcomingAppointments = appointments
    .filter((a) => a.status === "confirmed")
    .sort((a, b) =>
      compareAsc(parseISO(a.selectedDate), parseISO(b.selectedDate)),
    );

  const historyAppointments = appointments
    .filter((a) => ["completed", "cancelled"].includes(a.status))
    .sort((a, b) =>
      compareDesc(parseISO(a.selectedDate), parseISO(b.selectedDate)),
    );

  return (
    <section className='flex-1 '>
      <div className='space-y-10'>
        {/* Header */}
        <UniversalHeader
          title='My Appointments'
          description='Manage and review your scheduled consultations with our atelier.'
        />

        {pendingAppointments.length === 0 &&
          upcomingAppointments.length === 0 && <NoUpcomingAppointment />}

        {pendingAppointments.length > 0 && (
          <PendingAppointments appointments={pendingAppointments} />
        )}

        {/* Upcoming Appointment */}
        {upcomingAppointments.length > 0 && (
          <UpcomingAppointment upcoming={upcomingAppointments[0]} />
        )}

        {/* All Appointments */}
        {historyAppointments.length > 0 && (
          <AppointmentHistory appointments={historyAppointments} />
        )}
      </div>
    </section>
  );
};

export default MyApoointmentsPage;
