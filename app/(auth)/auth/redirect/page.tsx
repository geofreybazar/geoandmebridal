import { auth } from "@/auth";
import { redirect } from "next/navigation";

const RedirectPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  if (session.isNewUser) {
    redirect("/signup");
  }

  redirect("/");
};

export default RedirectPage;
