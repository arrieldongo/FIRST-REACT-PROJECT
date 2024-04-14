import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { LoginContainer } from "@/ui/module/authentification/login/login.container";

export default function Connection() {
  return ( <>
  
    <Seo 
      title="Connexion sur Coder Monkeys"   
      description="Page de connexion"     
    />

    <Layout>
      <LoginContainer/>
    </Layout>
    
  </>
   
  );
}
