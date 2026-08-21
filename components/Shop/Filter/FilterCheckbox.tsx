import { Checkbox } from "@/components/ui/checkbox";
import { paragraph } from "@/utils/fonts/fonts";

interface FilterCheckboxProps {
  label: string;
  checked: boolean;
  onChecked: () => void;
}

const FilterCheckbox = ({ label, checked, onChecked }: FilterCheckboxProps) => {
  return (
    <label
      className='flex items-center gap-3 cursor-pointer select-none'
      onClick={onChecked}
    >
      <Checkbox
        checked={checked}
        onCheckedChange={onChecked}
        className='border-black/40 data-[state=checked]:bg-black data-[state=checked]:text-white'
      />
      <span
        className={`${paragraph.className} text-base text-black/80 capitalize`}
      >
        {label}
      </span>
    </label>
  );
};

export default FilterCheckbox;
