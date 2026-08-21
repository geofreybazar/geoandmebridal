import { auth } from "@/auth";
import { GetClientUserProfile } from "@/services/clients";

import { Card, CardContent } from "@/components/ui/card";
import ConsultationCard from "./ConsultationCard";
import CustomSeparator from "@/components/SharedComponents/CustomSeparator";

const BookConsultation = async () => {
  const session = await auth();
  const userId = session?.user.clientId;

  if (!userId) {
    return <div>User not found</div>;
  }

  const userProfile = await GetClientUserProfile(userId);

  if (!userProfile) {
    return <div>Profile not found</div>;
  }

  return (
    <section className='flex-1 space-y-6'>
      {/* Header */}
      <div className='space-y-4'>
        <div>
          <h1 className='font-serif text-3xl font-light'>
            Book a Consultation
          </h1>

          <CustomSeparator />
        </div>

        <p className='text-muted-foreground text-justify md:text-left'>
          Begin your couture journey with a personal consultation. Share your
          vision and preferred schedule, and our team will assist you every step
          of the way.
        </p>
      </div>

      {/* Form Card */}
      <Card>
        <CardContent className='space-y-8'>
          <ConsultationCard userProfile={userProfile} />
        </CardContent>
      </Card>

      {/* Footer Note */}
      <p className='text-xs text-muted-foreground text-center'>
        Our team will review your request and contact you shortly to confirm
        your consultation schedule.
      </p>
    </section>
  );
};

export default BookConsultation;
