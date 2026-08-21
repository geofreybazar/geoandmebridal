import React from "react";

const RTWDashboard = () => {
  return (
    <section className='mb-16'>
      <h2 className='font-serif text-2xl mb-8'>Your Recent Orders</h2>

      {/* {data.rtwOrders.map((order) => (
        <div
          key={order.id}
          className='bg-white rounded-lg p-8 shadow-sm border border-black/5 mb-6'
        >
          <p className='text-sm text-gray-500 mb-1'>
            Order #{order.orderNumber}
          </p>

          <p className='text-lg font-medium mb-2'>{order.productName}</p>

          <p className='text-sm text-gray-600'>Status: {order.status}</p>
        </div>
      ))} */}
    </section>
  );
};

export default RTWDashboard;
