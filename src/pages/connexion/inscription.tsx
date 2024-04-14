import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { RegisterContainer } from "@/ui/module/authentification/register/register.container";

export default function Register() {
  return ( <>
  
    <Seo 
      title="Inscription sur Coder Monkeys"   
      description="Page de Inscription"     
    />

    <Layout>
      <RegisterContainer/>
    </Layout>
    
  </>
   
  );
}
