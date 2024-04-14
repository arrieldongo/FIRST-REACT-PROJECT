import { Container } from "@/ui/component/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Link from "next/link";
import Image from "next/image";
import { ForgetPasswordForm } from "./forget-password.form";

export const ForgetPasswordView =  () => {
  return(
    <Container className="grid grid-cols-2 gap-20 mt-10">
    <div className="flex items-center">
      <div className="relative w-full h-[531px]">
        < Image
          fill
          src="/assets/svg/forgetpassword.svg"
          alt="description de l'illustration"
          className="object-scale-down"
        />
      </div>
    </div>
    
    <div className="flex items-center">
      <Box padding_y="py-5">
          <div className="flex items-center justify-between">

            <Typographie variant="h5" component="h1">
              Mot de passe perdu ?
            </Typographie>

            <div className="flex items-center">
             
              <Typographie variant="caption-4" component="span" theme="primary">
                <Link href="/connexion" >Connexion</Link>
              </Typographie> 
            </div>

          </div>

          <ForgetPasswordForm/>
          
      </Box>
    </div>
  </Container>
  );
}