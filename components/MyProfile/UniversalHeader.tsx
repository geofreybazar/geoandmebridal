import CustomSeparator from "../SharedComponents/CustomSeparator";

const UniversalHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <div>
      <h1 className='font-serif text-3xl font-light'>{title}</h1>

      <CustomSeparator />

      <p className='text-muted-foreground mt-4'>{description}</p>
    </div>
  );
};

export default UniversalHeader;
