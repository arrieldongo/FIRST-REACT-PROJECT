import { Container } from "@/ui/component/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "./login.form";
import { FormsType } from "@/types/forms";

interface Props {
  form: FormsType;
}

export const LoginView =  ({ form}: Props) => {
  return(
    <Container className="grid grid-cols-2 gap-20 mt-10">
    <div className="flex items-center">
      <div className="relative w-full h-[531px]">
        < Image
          fill
          src="/assets/svg/login.svg"
          alt="description de l'illustration"
          className="object-scale-down"
        />
      </div>
    </div>
    
    <div className="flex items-center">
      <Box padding_y="py-5">
          <div className="flex items-center justify-between">

            <Typographie variant="h5" component="h1">
              Connexion
            </Typographie>

            <div className="flex items-center gap-2">
              <Typographie variant="caption-4" component="span" theme="gray">
                Tu n’as pas de compte ? 
              </Typographie>
              <Typographie variant="caption-4" component="span" theme="primary">
                <Link href="/connexion" >S’inscrire</Link>
              </Typographie> 
            </div>

          </div>

          <LoginForm form={form}/>
          
      </Box>
    </div>
  </Container>
  );
}