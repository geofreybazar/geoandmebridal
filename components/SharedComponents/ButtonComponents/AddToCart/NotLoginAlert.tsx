import { useRouter } from "next/navigation";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import MochaContainedButton from "../MochaContainedButton";
import OutlinedMochaButton from "../OutlinedMochaButton";
import { paragraph, title } from "@/utils/fonts/fonts";

interface NotLoginAlertProps {
  showNotLoginUserAlert: boolean;
  setShowNotLoginUserAlert: (value: boolean) => void;
}

const NotLoginAlert = ({
  showNotLoginUserAlert,
  setShowNotLoginUserAlert,
}: NotLoginAlertProps) => {
  const router = useRouter();

  return (
    <AlertDialog
      open={showNotLoginUserAlert}
      onOpenChange={setShowNotLoginUserAlert}
    >
      <AlertDialogContent className='bg-linear-to-b from-offwhite to-champagneBeige'>
        <AlertDialogHeader>
          <AlertDialogTitle
            className={`${title.className} text-lg md:text-2xl text-black capitalize`}
          >
            Login Required
          </AlertDialogTitle>
          <AlertDialogDescription
            className={`${paragraph.className} text-black/70 text-sm md:text-base mt-2`}
          >
            Sign in to save your favorite bridal pieces, manage your cart, and
            enjoy a seamless checkout experience.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <OutlinedMochaButton onClick={() => setShowNotLoginUserAlert(false)}>
            Continue Browsing
          </OutlinedMochaButton>
          <MochaContainedButton onClick={() => router.push("/login")}>
            Go to Login
          </MochaContainedButton>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default NotLoginAlert;
