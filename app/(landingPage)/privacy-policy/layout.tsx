import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <main className='px-6 xl:px-36 2xl:px-52 pb-20'>{children}</main>;
};

export default layout;
