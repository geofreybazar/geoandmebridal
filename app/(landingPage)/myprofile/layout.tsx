import { redirect } from "next/navigation";
import { auth } from "@/auth";

import DeactivatedAccount from "@/components/MyProfile/DeactivatedAccount/DeactivatedAccount";
import SidebarComponent from "@/components/MyProfile/Sidebar/SidebarComponent";
import { GetClientUserProfile } from "@/services/clients";

const layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();
  const userId = session?.user.clientId;

  if (!userId) {
    redirect("/");
  }

  const userProfile = await GetClientUserProfile(userId);

  if (!userProfile) {
    return <div>Profile not found</div>;
  }

  if (userProfile.status === "inactive") {
    return <DeactivatedAccount />;
  }

  return (
    <main className='px-6 xl:px-36 2xl:px-52 pb-20 flex gap-6 xl:gap-20'>
      <SidebarComponent />
      {children}
    </main>
  );
};

export default layout;
