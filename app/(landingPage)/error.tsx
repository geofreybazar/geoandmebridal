"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ErrorPage() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/myprofile");
    }, 6000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <section className='min-h-screen flex items-center justify-center'>
      <div className='max-w-xl text-center space-y-8 animate-fade-in'>
        {/* Title */}
        <h1 className='font-serif text-4xl font-light'>
          This page seems to have wandered
        </h1>

        {/* Divider */}
        <div className='w-16 h-[2px] bg-champagneGold mx-auto' />

        {/* Message */}
        <p className='text-muted-foreground text-sm leading-relaxed'>
          The page you’re looking for may have been moved or is no longer
          available. Let us guide you back to your couture journey.
        </p>

        {/* Actions */}
        <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-4'>
          <Button
            asChild
            className='bg-warmTaupe hover:bg-champagneGold text-white px-6'
          >
            <Link href='/myprofile'>Return to Dashboard</Link>
          </Button>

          <Button asChild variant='outline' className='px-6'>
            <Link href='/'>Back to Home</Link>
          </Button>
        </div>

        {/* Footer */}
        <div className='pt-6 space-y-2'>
          <p className='text-xs text-muted-foreground'>
            You’ll be redirected shortly…
          </p>

          <p className='text-[10px] text-muted-foreground'>
            GEO + Me Bridal Atelier
          </p>
        </div>
      </div>
    </section>
  );
}
