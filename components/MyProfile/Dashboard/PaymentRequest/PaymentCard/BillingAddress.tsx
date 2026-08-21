import InputField from "./InputField";

const BillingAddress = () => {
  return (
    <div className='space-y-6'>
      <h3 className='text-sm font-medium tracking-wide'>Billing Address</h3>

      <div className='grid gap-4'>
        <div className='space-y-2'>
          <InputField
            name='address'
            placeholder='Street address, building, etc.'
            label='Address'
          />
        </div>

        <div className='grid md:grid-cols-2 gap-4'>
          <div className='space-y-2'>
            <InputField name='city' placeholder='City' label='City' />
          </div>

          <div className='space-y-2'>
            <InputField
              name='province'
              placeholder='Province'
              label='Province'
            />
          </div>
        </div>

        <div className='max-w-xs space-y-2'>
          <InputField
            name='postalCode'
            placeholder='Postal Code'
            label='Postal Code'
          />
        </div>
      </div>
    </div>
  );
};

export default BillingAddress;
