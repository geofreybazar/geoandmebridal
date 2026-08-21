import { useFilters } from "@/utils/shop/filter";
import { SheetFooter, SheetClose } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const FilterFooter = ({ setOpen }: { setOpen: (isOpen: boolean) => void }) => {
  const { clearFilters } = useFilters();

  const handleClearFilters = () => {
    clearFilters();
    requestAnimationFrame(() => {
      setOpen(false);
    });
  };

  return (
    <SheetFooter className='border-t p-6 flex flex-col gap-3 sticky bottom-0 bg-white'>
      <Button
        variant='outline'
        className='w-full border-black/40 text-base uppercase tracking-wide py-5'
        onClick={handleClearFilters}
      >
        Clear Filters
      </Button>

      <SheetClose asChild>
        <Button className='w-full bg-black text-white hover:bg-black/90 text-base uppercase tracking-wide py-5'>
          Apply Filters
        </Button>
      </SheetClose>
    </SheetFooter>
  );
};

export default FilterFooter;
