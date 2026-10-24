import Link from "next/link";
import { notFound } from "next/navigation";

import { GetBride } from "@/services/brides";
import { paragraph, title } from "@/utils/fonts/fonts";
import ViewBrideGrid from "@/components/Brides/ViewBrideGrid";
import BreadCrumbsComponent from "@/components/SharedComponents/BreadCrumbsComponent/BreadCrumbsComponent";

const ViewBridePage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const bride = await GetBride(id);

  if (!bride) {
    notFound();
  }

  // Only the first name is shown publicly (owner decision 2026-10-24)
  const firstName = bride.bridesName.split(" ")[0];

  return (
    <main>
      {/* The layout's padding already applies here */}
      <BreadCrumbsComponent lastLabel={firstName} className='pt-10 pb-6' />

      {/* Header */}
      <section className='pb-16 '>
        <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
          Real Bride
        </p>

        <h1
          className={`${title.className} text-4xl md:text-5xl lg:text-6xl text-black capitalize`}
        >
          {firstName}
        </h1>

        <div className='w-24 h-px mx-auto my-8 bg-gradient-to-r from-transparent via-champagneGold to-transparent' />

        {bride.details?.venue && (
          <p
            className={`${paragraph.className} text-sm md:text-lg text-black/70`}
          >
            {bride.details.venue}
          </p>
        )}
      </section>

      {/* Album Grid */}
      <ViewBrideGrid bride={bride} />

      {/* Details */}
      {bride.details?.remarks && (
        <section className='px-6 xl:px-36 2xl:px-52 pb-24'>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-xs tracking-[0.35em] uppercase text-black/60 mb-4'>
              The Gown
            </p>

            <p
              className={`${paragraph.className} text-sm md:text-lg text-black/70 leading-relaxed`}
            >
              {bride.details.remarks}
            </p>
          </div>
        </section>
      )}

      {/* Back */}
      <section className='pb-24 flex justify-center'>
        <Link
          href='/brides'
          className='text-sm tracking-wide underline underline-offset-4 text-black/70 hover:text-black transition'
        >
          Back to Brides
        </Link>
      </section>
    </main>
  );
};

export default ViewBridePage;
