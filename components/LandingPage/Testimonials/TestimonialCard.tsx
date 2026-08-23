import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role?: string;
  message: string;
  rating?: number;
}

const TestimonialCard = ({
  name,
  role,
  message,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <Card className='rounded-3xl border border-[#E8DED6] bg-[#FFFCFA] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md'>
      <CardContent className='flex h-full flex-col gap-6 p-8'>
        {/* Rating */}
        <div className='flex gap-1'>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating
                  ? "fill-[#C9A96A] text-[#C9A96A]"
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Testimonial */}
        <blockquote>
          <p className='line-clamp-5 text-[15px] leading-8 italic text-[#4A4745]'>
            “{message}”
          </p>
        </blockquote>

        {/* Footer */}
        <div className='border-t border-[#EEE7E2] pt-4'>
          <h3 className='text-base font-semibold text-[#2F2825]'>
            {name.split(" ")[0]}
          </h3>

          {role && (
            <p className='mt-1 text-xs uppercase tracking-[0.15em] text-[#A38A7A]'>
              {role}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
