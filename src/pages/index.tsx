import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { LandingPageContainer } from "@/ui/module/landing-page/landing-page.container";


export default function Home() {
  return ( <>
  
    <Seo title="Coder Monkeys" description="content"/>

    <Layout>
      <LandingPageContainer/>
    </Layout>
    
  </>
   
  );
}
