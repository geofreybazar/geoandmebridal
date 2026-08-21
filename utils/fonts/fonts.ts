import { Libre_Baskerville } from "next/font/google";
import { Lato } from "next/font/google";

const title = Libre_Baskerville({
  weight: "400",
  subsets: ["latin"],
});

const paragraph = Lato({
  weight: "400",
  subsets: ["latin"],
});

export { title, paragraph };
