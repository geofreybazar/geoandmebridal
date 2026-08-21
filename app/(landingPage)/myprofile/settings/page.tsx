import { auth } from "@/auth";
import { GetClientUserProfile } from "@/services/clients";

import Profile from "@/components/MyProfile/Settings/Profile/Profile";
import ContactDetails from "@/components/MyProfile/Settings/ContactDetails/ContactDetails";
import AccountMangement from "@/components/MyProfile/Settings/AccountMangement/AccountMangement";
import UniversalHeader from "@/components/MyProfile/UniversalHeader";

const SettingsPage = async () => {
  const session = await auth();
  const userId = session?.user.clientId;

  if (!userId) {
    return <div>User not found</div>;
  }

  const user = await GetClientUserProfile(userId);

  if (!user) {
    return <div>Profile not found</div>;
  }

  return (
    <section className='flex-1 space-y-10'>
      {/* Header */}
      <UniversalHeader
        title='Account Settings'
        description='Manage your personal information and account preferences.'
      />

      {/* Profile Info */}
      <Profile user={user} />

      {/* Contact Details */}
      <ContactDetails user={user} />

      {/* Danger Zone */}
      <AccountMangement userId={user._id} />
    </section>
  );
};

export default SettingsPage;
