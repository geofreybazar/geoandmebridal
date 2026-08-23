import { redirect } from "next/navigation";
import { auth } from "@/auth";

import Hero from "./Hero";
import { GetClientUserProfile } from "@/services/clients";
import RTWDashboard from "./RTWDashboard";
import EmptyDashboard from "./EmptyDashboard";
import CoutureDashboard from "./CoutureDashboard/CoutureDashboard";
import PaymentRequest from "./PaymentRequest/PaymentRequest";
import AppointmentsOverview from "./AppointmentOverview/AppointmentOverview";

const Dashboard = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  const userId = session.user.clientId;

  if (!userId) {
    redirect("/signup");
  }

  const userProfile = await GetClientUserProfile(userId);

  if (!userProfile) {
    return <div>Profile not found</div>;
  }

  const customOrders =
    userProfile.customOrder?.filter(
      (order) =>
        order.status === "active_projects" ||
        order.status === "completed_projects",
    ) || [];

  const hasRTW = userProfile.orders?.length > 0;
  const hasCouture = customOrders.length > 0;

  const pendingPayment = userProfile.paymentRequest?.find(
    (payment) => payment.status === "pending",
  );

  const confirmedAppointments = userProfile.appointments?.filter(
    (appointment) =>
      appointment.status === "confirmed" || appointment.status === "pending",
  );

  const hasAppointments = confirmedAppointments.length > 0;

  return (
    <div className='flex-1'>
      <div>
        <Hero />
        {hasAppointments && (
          <AppointmentsOverview appointments={userProfile.appointments} />
        )}

        {pendingPayment && <PaymentRequest paymentRequest={pendingPayment} />}

        <>
          {hasCouture && <CoutureDashboard customOrders={customOrders} />}
          {hasRTW && <RTWDashboard />}
          {!hasCouture && !hasRTW && !pendingPayment && !hasAppointments && (
            <EmptyDashboard />
          )}
        </>
      </div>
    </div>
  );
};

export default Dashboard;
