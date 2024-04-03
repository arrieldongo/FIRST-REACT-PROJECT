import { Seo } from "@/ui/component/seo/seo";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return ( <>

    < Seo title="first app react" description="content"/>

    <div className="space-y-5">
      <Typographie variant="display" component="div"> coder Monkeys </Typographie>
      <Typographie theme="primary" variant="h1" component="div"> coder Monkeys </Typographie>
      <Typographie theme="secondary" variant="h4" component="div"> coder Monkeys </Typographie>
      <Typographie variant="h5" component="div"> coder Monkeys </Typographie>
      <Typographie variant="lead" component="div"> coder Monkeys </Typographie>
      <Typographie variant="Body-sm" component="div"> coder Monkeys </Typographie>
      <Typographie variant="Body-lg" component="div"> coder Monkeys </Typographie>
      <Typographie variant="caption-4" component="div"> coder Monkeys </Typographie>
      <Typographie variant="caption-4" weight="medium" component="div"> coder Monkeys </Typographie>

    </div>
    
     
  
  </>
   
  );
}
