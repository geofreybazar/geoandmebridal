import { useFilters } from "@/utils/shop/filter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FilterCheckbox from "./FilterCheckbox";
import { SIZES } from "@/utils/constants/shop";
import { useContextSubCategories } from "@/store/shop/subCategoriesContext";

const AccordionFilter = () => {
  const { toggleFilter, isChecked } = useFilters();
  const categories = useContextSubCategories();

  return (
    <Accordion type='multiple' className='w-full space-y-4'>
      {/* CATEGORY */}
      <AccordionItem value='category' className='border-b'>
        <AccordionTrigger className='uppercase tracking-[0.08em] text-base py-3'>
          Categories
        </AccordionTrigger>
        <AccordionContent className='pt-2 pb-4 space-y-3'>
          {categories?.map((cat) => (
            <FilterCheckbox
              key={cat.value}
              label={cat.label}
              checked={isChecked("category", cat.value)}
              onChecked={() => toggleFilter("category", cat.value)}
            />
          ))}
        </AccordionContent>
      </AccordionItem>

      {/* SIZE */}
      <AccordionItem value='sizes' className='border-b'>
        <AccordionTrigger className='uppercase tracking-[0.08em] text-base py-3'>
          Sizes
        </AccordionTrigger>
        <AccordionContent className='pt-2 pb-4 space-y-3'>
          {SIZES.map((size) => (
            <FilterCheckbox
              key={size}
              label={size}
              checked={isChecked("size", size)}
              onChecked={() => toggleFilter("size", size)}
            />
          ))}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionFilter;
