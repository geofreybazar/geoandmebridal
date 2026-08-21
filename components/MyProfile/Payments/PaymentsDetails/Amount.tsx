const Amount = ({ amount, status }: { amount: string; status: string }) => {
  return (
    <div>
      {status === "paid" ? (
        <p className='text-sm text-muted-foreground'>Amount Paid</p>
      ) : (
        <p className='text-sm text-muted-foreground'>Amount to Pay</p>
      )}

      <p className='text-2xl font-semibold text-warmTaupe mt-1'>{amount}</p>
    </div>
  );
};

export default Amount;
