"use client";

import { useState } from "react";
import { title } from "@/utils/fonts/fonts";
import Stepper from "./Stepper";
import BookingAppointmentForm from "@/components/SharedComponents/BookingAppointmentForm/Form";

const Right = () => {
  const [step, setStep] = useState(0);
  const totalSteps = 3;
  return (
    <div className='bg-ivoryWhite rounded-md p-8 shadow-sm flex flex-col gap-6'>
      <h3 className={`${title.className} text-2xl`}>Request an Appointment</h3>
      <Stepper step={step} totalSteps={totalSteps} />

      <BookingAppointmentForm step={step} setStep={setStep} />
    </div>
  );
};

export default Right;
