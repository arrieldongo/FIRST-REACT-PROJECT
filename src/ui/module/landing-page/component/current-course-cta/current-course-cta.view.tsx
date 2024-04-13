import { Container } from "@/ui/component/container/container";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Image from "next/image";
import { RiPlayCircleLine } from "react-icons/ri";

export const CurrentCourseCtaView = () => {
  return(
    <div className="bg-gray-300">

      <Container className="py-24 text-center">

      <Typographie variant="h2" component="h2" className="mb-2.5">
        Formations React.js gratuite
      </Typographie>

      <Typographie variant="lead" component="h3" className="mb-5">
        Apprends à coder l’app des singes codeurs
      </Typographie>

      <Typographie variant="caption-3" component="p" theme="gray" className="mb-16">
        Si tu veux un CV plus sexy que ton ex, suis cette formation complète !
      </Typographie>

      <a href="/#" target="_blank">
        <div className="relative bg-gray-400 rounded h-[626px]">

          <div className="flex items-center justify-center flex-col gap-2 relative h-full rounded bg-gray text-white z-10 opacity-0 hover:opacity-95 animate">

            <RiPlayCircleLine size={42}/>
            <Typographie variant="caption-2" theme="white" weight="medium" className="uppercase">
              Lire la formation
            </Typographie>
            
          </div>

          <Image
            fill
            src={"/assets/images/coders-mokeys-courses-cta.jpg"}
            alt=""
            className="object-cover object-center rounded"
          />
        </div>
      </a>

      </Container>

    </div>

  ); 
}