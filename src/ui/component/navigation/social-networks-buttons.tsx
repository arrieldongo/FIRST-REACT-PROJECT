import { Button } from "@/ui/design-system/button/button";
import { footerSocialNetworksLinks } from "./app-links";
import { v4 as uuidv4 } from 'uuid';
import { RiFacebookBoxFill, RiFacebookFill } from "react-icons/ri";
import clsx from "clsx";



interface props {
  theme?: "gray" | "accent" | "secondary";
  className?: string;
}
export const SocialNetworksButtons =({className, theme="accent"}: props) => {

  const icoList = footerSocialNetworksLinks.map((socialNetworks) => (

  <Button
        key={uuidv4()}
        variant="ico"
        iconTheme={theme}
        icon={{ icon: 
          socialNetworks.icon ? socialNetworks.icon : RiFacebookBoxFill
        }}
        baseUrl={socialNetworks.baseUrl}
        linkType={socialNetworks.type }
      />
  ))

  return(
    <div className={clsx(className, "flex items-center gap-2.5")}>
      {icoList}
    </div>
  );
}