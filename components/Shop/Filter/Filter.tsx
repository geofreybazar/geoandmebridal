"use client";

import { useState } from "react";
import FilterPage from "./FilterPage";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ListFilter } from "lucide-react";
import { paragraph } from "@/utils/fonts/fonts";
import { GetCategoriesType } from "@/types/shop";
import SubCategoriesContext from "@/store/shop/subCategoriesContext";

type SearchQuery = { [key: string]: string | string[] | undefined };

interface FilterProps {
  searchQuery: SearchQuery;
  subCategories: GetCategoriesType[];
}

const Filter = ({ searchQuery, subCategories }: FilterProps) => {
  const [open, setOpen] = useState(false);
  const isEmpty = Object.keys(searchQuery).length === 0;

  return (
    <Sheet open={open} onOpenChange={(isOpen) => setOpen(isOpen)}>
      <SheetTrigger asChild>
        <Button className='flex items-center gap-2 text-sm md:text-base py-4 lg:py-6'>
          <ListFilter />
          <p className={`${paragraph.className}`}>Filter</p>
          {!isEmpty && (
            <span className='inline-block w-2 h-2 rounded-full bg-red-500' />
          )}
        </Button>
      </SheetTrigger>
      <SubCategoriesContext.Provider value={subCategories}>
        <FilterPage setOpen={setOpen} />
      </SubCategoriesContext.Provider>
    </Sheet>
  );
};

export default Filter;
