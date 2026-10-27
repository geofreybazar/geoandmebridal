import type { Metadata } from "next";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Content from "@/components/Appointment/Content";
import PageHeader from "@/components/SharedComponents/PageHeader/PageHeader";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description:
    "Book a personal, unhurried bridal consultation with GEO + Me Bridal to begin designing your bespoke wedding gown.",
  alternates: { canonical: "/appointment" },
};

const BookAppointmentPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/myprofile/bookconsultation");
  }

  return (
    <main>
      {/* Header */}
      <PageHeader
        miniTitle={"Appointment"}
        mainTitle={"Book a Consultation"}
        description={
          " Our consultations are designed to be personal and unhurried. This is where we begin translating your vision into a bespoke bridal gown, thoughtfully crafted just for you."
        }
      />
      {/* Content */}
      <Content />
    </main>
  );
};

export default BookAppointmentPage;
