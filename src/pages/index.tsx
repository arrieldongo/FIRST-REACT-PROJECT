import { Navigation } from "@/ui/component/navigation/navigation";
import { Seo } from "@/ui/component/seo/seo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return ( <>
  
    <Seo title="Coder Monkeys" description="content"/>

    <Navigation/>

  </>
   
  );
}
