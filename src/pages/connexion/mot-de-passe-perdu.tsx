import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { ForgetPasswordContainer } from "@/ui/module/authentification/forget-password/forget-password.container";

export default function ForgetPassword() {
  return ( <>
  
    <Seo 
      title="Connexion sur Coder Monkeys"   
      description="Page de connexion"     
    />

    <Layout>
      <ForgetPasswordContainer/>
    </Layout>
    
  </>
   
  );
}
