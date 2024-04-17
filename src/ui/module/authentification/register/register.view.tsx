import { Container } from "@/ui/component/container/container";
import { Box } from "@/ui/design-system/box/box";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Image from "next/image";
import Link from "next/link";
import { RegisterForm } from "./register.form";
import { FormsType } from "@/types/forms";

interface Props {
  form: FormsType;
}

export const RegisterView = ({ form }: Props) => {
  return (
    <Container className="grid grid-cols-2 gap-20 mt-10">
      <div className="flex items-center">
        <div className="relative w-full h-[531px]">
          < Image
            fill
            src="/assets/svg/register.svg"
            alt="description de l'illustration"
            className="object-scale-down"
          />
        </div>
      </div>

      <div className="flex items-center">
        <Box padding_y="py-5">
          <div className="flex items-center justify-between">

            <Typographie variant="h5" component="h1">
              Inscription
            </Typographie>

            <div className="flex items-center gap-2">
              <Typographie variant="caption-4" component="span" theme="gray">
                Tu as déjà un compte?
              </Typographie>
              <Typographie variant="caption-4" component="span" theme="primary">
                <Link href="/connexion" >Connexion</Link>
              </Typographie>
            </div>

          </div>

          <RegisterForm form={form} />

          <Typographie variant="caption-4" theme="gray" className="max-w-md mx-auto space-y-1 text-center">
            <div>
              En t’inscrivant, tu acceptes les
            </div>
            <div>
              <Link href="/#" className="text-gray">
                Conditions d'utilisation
              </Link>
              {" "} et la {" "}
              <Link href="/#" className="text-gray">
                Politique de confidentialité.
              </Link>
              .
            </div>
          </Typographie>
        </Box>
      </div>
    </Container>
  );
}