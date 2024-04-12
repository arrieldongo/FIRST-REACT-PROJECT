import { Container } from "@/ui/component/container/container";
import { SocialNetworksButtons } from "@/ui/component/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/button";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import Image from "next/image";
import { RiArrowRightLine } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';


interface featuresListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;

}

const featuredData: featuresListInterface[]= [
  {
    imagePath: "/assets/svg/diskette.svg",
    imageAlt: "illustration",
    title: "Ressources",
    description: "Consulte et partage des ressources pour les devs",
  },
   {
     imagePath: "/assets/svg/manette.svg",
     imageAlt: "illustration",
     title: "Entrainement",
     description: "Entraîne-toi à devenir meilleur et trouve de l’inspiration",
   },
   {
       imagePath: "/assets/svg/baffle.svg",
       imageAlt: "illustration",
       title: "Visibilité",
       description: "Expose tes projets et crée toi des opportunités !",
     },
     {
       imagePath: "/assets/svg/boussole.svg",
       imageAlt: "illustration",
       title: "Relations",
       description: "Connecte-toi avec des devs web et booste ta carrière !",
     },
]

export const FeaturedView = () => {

  const featuredList = featuredData.map((feature) => (
    <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
      <div className="relative w-[130px] h-[130px] rounded-full mb-6 p-10 overflow-hidden">
         
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down blur-2xl "
        />
        
        <Image
          fill
          src={feature.imagePath}
          alt={feature.imageAlt}
          className="object-scale-down "
        /> 
      </div> 
      <Typographie variant="lead" component="h3" weight="medium" className="text-center mb-2.5">
        {feature.title}
      </Typographie>
      <Typographie variant="Body-base" component="p" theme="gray" className="text-center">
        {feature.description}
      </Typographie>
    </div>
  ))

  return(
    <div className="bg-gray-300">
      <Container className="grid grid-cols-12 gap-24 py-24">

        <div className="grid grid-cols-2 gap-7 col-span-7">
          {featuredList}
        </div>

        <div className="flex flex-col justify-between col-span-5 gap-10">

          <div>
            < Typographie variant="h2" component="h2" className="mb-5">
              L’endroit le plus cool pour devenir développeur
            </Typographie>

            < Typographie variant="Body-lg" component="p"  theme="gray" className="mb-8">
            Du partage, des connexions et des formations notre app gère tout ça pour toi. Rejoins la communauté et grimpe en grade. Let's go !
            </Typographie>

            <Button variant="secondary" baseUrl="" icon={{icon: RiArrowRightLine}} iconPosition="right">Commencer</Button>
          </div>

          <div>
            < Typographie variant="caption-3" theme="gray" component="div" className="mb-4">
              Nos réseaux sociaux
            </Typographie>

            <SocialNetworksButtons/>

          </div>

        </div>

      </Container>

    </div>
  );
}