import { Seo } from "@/ui/component/seo/seo";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return ( <>
    < Seo title="first app react" description="content"/>
    <h1>Hello arriel</h1>
  
  </>
   
  );
}
