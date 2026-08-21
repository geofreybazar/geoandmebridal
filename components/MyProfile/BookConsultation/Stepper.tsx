interface StepperProps {
  step: number;
  totalSteps?: number;
}

const Stepper = ({ step, totalSteps = 3 }: StepperProps) => {
  return (
    <div className='w-full grid grid-cols-3 gap-5'>
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepIndex = index;

        return (
          <div
            key={stepIndex}
            className={`w-full h-1 rounded-md transition-all duration-300 ease-out ${
              step >= stepIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Stepper;
