import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='bg-linear-to-b from-offwhite to-champagneBeige min-h-screen'>
      {children}
    </div>
  );
};

export default layout;
