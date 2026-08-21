import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

type DialogComponentProps = {
  open: boolean;
  buttonLabel: string;
  dialogTitle: string;
  dialogDescription: string;
  modalOnChange: (isOpen: boolean) => void;
  children: React.ReactNode;
  maxWidth?: string;
};

const DialogComponent = ({
  open,
  buttonLabel,
  dialogTitle,
  dialogDescription,
  modalOnChange,
  children,
  maxWidth,
}: DialogComponentProps) => {
  return (
    <Dialog open={open} onOpenChange={modalOnChange}>
      <DialogTrigger asChild>
        <Button variant='outline'>{buttonLabel}</Button>
      </DialogTrigger>
      <DialogContent className={`bg-white ${maxWidth ?? "max-w-lg"}`}>
        <DialogHeader>
          <DialogTitle className='text-xl font-semibold text-gray-800'>
            {dialogTitle}
          </DialogTitle>
          <DialogDescription className='text-gray-500'>
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
