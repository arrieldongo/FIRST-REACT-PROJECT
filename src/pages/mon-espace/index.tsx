import { REGISTERED } from "@/lib/session-status";
import { Layout } from "@/ui/component/layout/layout";
import { Seo } from "@/ui/component/seo/seo";
import { UserAccountContainer } from "@/ui/module/user-profile/user-account/user-account.container";


export default function MonCompte() {
  return ( <>
  
    <Seo title="Mon espace" description="Espace utilisateur"/>

    <Layout withSidebar SessionStatus={REGISTERED}>
      <UserAccountContainer />
    </Layout>
    
  </>
   
  );
}
