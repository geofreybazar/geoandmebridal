import {
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { paragraph } from "@/utils/fonts/fonts";

const FilterHeader = () => {
  return (
    <SheetHeader>
      <SheetTitle
        className={`${paragraph.className} text-lg tracking-[0.15em] uppercase`}
      >
        Filters
      </SheetTitle>
      <SheetDescription className='sr-only'>
        Filter bridal and RTW products
      </SheetDescription>
    </SheetHeader>
  );
};

export default FilterHeader;
