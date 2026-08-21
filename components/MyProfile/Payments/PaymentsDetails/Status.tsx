const Status = ({ status }: { status: string }) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full ${
        status === "paid"
          ? "bg-green-100 text-green-700"
          : "bg-red-500 text-white"
      }`}
    >
      {status}
    </span>
  );
};

export default Status;
