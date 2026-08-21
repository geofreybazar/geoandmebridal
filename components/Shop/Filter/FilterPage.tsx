import { SheetContent } from "@/components/ui/sheet";
import AccordionFilter from "./AccordionFilter";
import { ScrollArea } from "@/components/ui/scroll-area";
import FilterHeader from "./FilterHeader";
import FilterFooter from "./FilterFooter";

const FilterPage = ({ setOpen }: { setOpen: (isOpen: boolean) => void }) => {
  return (
    <SheetContent
      side='right'
      className='w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl flex flex-col p-0'
    >
      {/* HEADER */}
      <div className='px-6 pt-6 pb-3 border-b'>
        <FilterHeader />
      </div>

      {/* FILTER BODY (Scroll) */}
      <ScrollArea className='flex-1 px-6 py-4 overflow-auto'>
        <AccordionFilter />
      </ScrollArea>

      {/* FOOTER */}
      <FilterFooter setOpen={setOpen} />
    </SheetContent>
  );
};

export default FilterPage;
