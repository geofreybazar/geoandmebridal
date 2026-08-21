"use client";

import { useFormContext, useWatch } from "react-hook-form";
import { BookAppointmentType } from "@/zodSchemas/appointment";

const Review = () => {
  const { control } = useFormContext<BookAppointmentType>();

  const date = useWatch({ control, name: "selectedDate" });
  const time = useWatch({ control, name: "selectedTime" });
  const fullName = useWatch({ control, name: "fullName" });
  const address = useWatch({ control, name: "address" });
  const email = useWatch({ control, name: "email" });
  const phone = useWatch({ control, name: "phone" });

  return (
    <section className='flex flex-col gap-4 md:gap-8'>
      {/* Appointment Details */}
      <div>
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-3'>
          Appointment Details
        </p>
        <ul className='space-y-2 text-sm'>
          <ListComponent label={"Date"} value={date} />
          <ListComponent label={"Time"} value={time} />
        </ul>
      </div>

      {/* Personal Information */}
      <div>
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-3'>
          Personal Information
        </p>
        <ul className='space-y-2 text-sm'>
          <ListComponent label={"Full Name"} value={fullName} />
          <ListComponent label={"Address"} value={address} />
          <ListComponent label={"Email"} value={email} />
          <ListComponent label={"Phone"} value={phone} />
        </ul>
      </div>
    </section>
  );
};

export default Review;

const ListComponent = ({
  label,
  value,
}: {
  label: string;
  value: string | Date | undefined;
}) => {
  return (
    <li
      className='
              flex
              flex-col
              md:flex-row
              md:justify-between
              gap-1
              border-b
              border-black/10
              pb-2
            '
    >
      <span className='text-black/60'>{label}</span>
      <span className='font-medium text-black'>
        {value instanceof Date
          ? new Date(value).toDateString()
          : value || "Not provided"}
      </span>
    </li>
  );
};
