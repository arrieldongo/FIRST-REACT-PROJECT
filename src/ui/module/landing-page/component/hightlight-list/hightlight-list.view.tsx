import { Container } from "@/ui/component/container/container";
import { Button } from "@/ui/design-system/button/button";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Image from "next/image";
import React from "react";
import { RiArrowRightLine, RiCheckboxCircleLine } from "react-icons/ri";

export const HightLightListView = () => {
  return(
    <Container className="py-24 space-y-10">
        {/* 1ère section */}

      <div className="flex justify-center gap-24">

        <div className="relative mt-10 w-[520px] h-[380px]">
          < Image
           fill
           src={"/assets/svg/cake.svg"}
           alt=""
          />
        </div>
        
        <div className="max-w-md space-y-7">
          <Typographie variant="h3" component="h2">
            De novice à développeur en un clin d'œil !
          </Typographie>

          <div className="space-y-3">
            <PointList>Progresse rapidement.</PointList>
            <PointList>Inspire-toi.</PointList>
            <PointList>Gagne de l’assurance.</PointList>
          </div> 

          <div className="relative inline-block">
            <Button baseUrl="" icon={{icon: RiArrowRightLine}} iconPosition="right">
              Let's go
            </Button>
            <Image
              src={"/assets/svg/cursor.svg"}
              alt=""
              width={25}
              height={27}
              className="absolute right-7 -bottom-5"
            />
          </div>
        </div>

      </div>

        {/* 2ème section */}

      <div className="flex flex-row-reverse justify-center gap-24">

        <div className="relative mt-10 w-[520px] h-[380px]">
            < Image
            fill
            src={"/assets/svg/toupille.svg"}
            alt=""
            />
        </div>
          
        <div className="max-w-md space-y-7">
            <Typographie variant="h3" component="h2">
              Booste ta carrière de développeur
            </Typographie>

            <div className="space-y-3">
              <PointList>Partage tes projets, obtiens des feedbacks.</PointList>
              <PointList>Connecte-toi, élargis ton réseau pro!</PointList>
              <PointList>Reste inspiré, motivé avec notre communauté.</PointList>
            </div> 

            <div className="relative inline-block">
              <Button variant="secondary" baseUrl="" icon={{icon: RiArrowRightLine}} iconPosition="right">
                Démarrer
              </Button>

            </div>
        </div>

      </div>
    </Container>
); 
}

interface props {
  children: React.ReactNode;
}

const PointList = ({children}:props) => {
  return(
    <div className="space-y-3">
      <div className="flex items-start gap-2">
        <RiCheckboxCircleLine size={24} className="mt-1 text-secondary"/>
        <Typographie variant="Body-lg" component="span">
          {children}
        </Typographie> 
      </div>  
    </div>
  );
}