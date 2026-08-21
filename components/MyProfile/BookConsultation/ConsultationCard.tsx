"use client";

import { useState } from "react";

import Stepper from "./Stepper";
import BookingAppointmentForm from "@/components/SharedComponents/BookingAppointmentForm/Form";
import { ClientUser } from "@/types/client";

const ConsultationCard = ({ userProfile }: { userProfile: ClientUser }) => {
  const [step, setStep] = useState(0);
  const totalSteps = 3;

  return (
    <div className='flex flex-col gap-6'>
      <Stepper step={step} totalSteps={totalSteps} />

      <BookingAppointmentForm
        step={step}
        setStep={setStep}
        userProfile={userProfile}
      />
    </div>
  );
};

export default ConsultationCard;
