"use client";

import { useState } from "react";

import { formatDate } from "@/utils/dates/dates";
import { Card, CardContent } from "@/components/ui/card";
import { Appointment } from "@/types/appointments";

import DialogComponent from "@/components/SharedComponents/DialogComponent";
import ReschduleForm from "./RescheduleForm/RescheduleForm";

const UpcomingAppointment = ({ upcoming }: { upcoming: Appointment }) => {
  const [open, setOpen] = useState(false);

  const modalOnChange = (isOpen: boolean) => {
    setOpen(isOpen);
  };

  return (
    <>
      {upcoming && (
        <Card className='bg-[#F5F1EB]'>
          <CardContent className='space-y-4 p-4 md:p-6'>
            <p className='text-xs tracking-widest uppercase text-muted-foreground'>
              Upcoming Appointment
            </p>

            <div>
              <p className='text-base md:text-lg font-medium'>
                Bridal Consultation
              </p>

              <p className='mt-1 text-sm text-muted-foreground'>
                {formatDate(upcoming.selectedDate)} • {upcoming.selectedTime}
              </p>
            </div>

            <div className='flex flex-col sm:flex-row gap-2 pt-2'>
              <DialogComponent
                open={open}
                buttonLabel='Reschedule'
                dialogTitle='Reschedule Appointment'
                dialogDescription='Request a new date and time for your consultation.'
                modalOnChange={modalOnChange}
              >
                <ReschduleForm setOpen={setOpen} />
              </DialogComponent>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default UpcomingAppointment;
