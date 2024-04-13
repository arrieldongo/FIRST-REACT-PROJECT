import { Container } from "@/ui/component/container/container";
import { Typographie } from "../typographie/typographie";
import { Button } from "../button/button";
import { TypeLinks } from "@/lib/type-links";
import Image from "next/image";

export const CallToActionView = () => {
  return(
    <div className="relative overflow-hidden bg-primary">
      <Container className="py-20">
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <Typographie variant="h2" component="h2" theme="white"  >
            N’attend pas pour développer tes compétences...
          </Typographie>
          <div>
            <Button variant="succes" baseUrl="/#" linkType={TypeLinks.EXTERNAL}>
              Formations React.js gratuite
            </Button>
          </div>
        </div>

        <div>
          < Image
            width={1210}
            height={1210}
            src="/assets/svg/bombers.svg"
            alt=""
            className="absolute -bottom-[500px] -right-[150px]"
          />
        </div>

      </Container>
    </div>
); 
}