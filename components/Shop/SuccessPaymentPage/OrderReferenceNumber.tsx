const OrderReferenceNumber = ({ id }: { id: string }) => {
  return (
    <div className='rounded-xl border bg-background px-6 py-6'>
      <p className='text-sm text-muted-foreground'>Order Reference</p>

      <p className='mt-1 text-lg font-medium tracking-wide'>{id}</p>
    </div>
  );
};

export default OrderReferenceNumber;
