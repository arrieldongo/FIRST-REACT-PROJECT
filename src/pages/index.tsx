import { Seo } from "@/ui/component/seo/seo";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return ( <>
    < Seo title="first app react" description="content"/>
    <Typographie variant="h1">
      coder Monkeys
    </Typographie>
     
  
  </>
   
  );
}
