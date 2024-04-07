import { Seo } from "@/ui/component/seo/seo";
import { Button } from "@/ui/design-system/button/button";
import { Spinner } from "@/ui/design-system/spinner/spinner";
import { Typographie } from "@/ui/design-system/typographie/typographie";
import { Inter } from "next/font/google";
import {  RiUser6Fill } from "react-icons/ri";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return ( <>
 
    <Seo title="first app react" description="content"/>

    <div className="flex items-center gap-4 p-2">
      <Spinner size="small"/>
      <Spinner/>
      <Spinner size="large"/>
    </div>   


    <div className="flex items-center gap-4 p-8">
      <Button isLoading size="small" variant="accent" icon={{icon: RiUser6Fill }} iconPosition="left"> accent </Button>
      <Button size="small" variant="secondary" icon={{icon: RiUser6Fill }} > secondary </Button>
      <Button isLoading size="small" variant="secondary" > secondary </Button>
      <Button size="small" variant="outline"> outline </Button>
      <Button size="small" variant="disable" disabled> disable </Button>

      <Button isLoading size="small" variant="ico" icon={{icon: RiUser6Fill }}/> 
    </div>   

    <div className="flex item-center gap-4 p-8">
      <Button variant="accent"> accent </Button>
      <Button variant="secondary"> secondary </Button>
      <Button variant="outline"> outline </Button>
      <Button variant="disable" disabled> disable </Button>

      <Button variant="ico" icon={{icon: RiUser6Fill }}/> 

    </div> 

    <div className="flex item-center gap-4 p-8">
      <Button size="large" variant="accent"> accent </Button>
      <Button size="large" variant="secondary"> secondary </Button>
      <Button size="large" variant="outline"> outline </Button>
      <Button size="large" variant="disable" disabled> disable </Button>

      <Button size="large" variant="ico" icon={{icon: RiUser6Fill }}/> 

    </div>  

    <div className="space-y-5">
      <Typographie variant="display" component="div"> coder Monkeys </Typographie>
      <Typographie theme="primary" variant="h1" component="div"> coder Monkeys </Typographie>
      <Typographie theme="secondary" variant="h4" component="div"> coder Monkeys </Typographie>
      <Typographie variant="h5" component="div"> coder Monkeys </Typographie>
      <Typographie variant="lead" component="div"> coder Monkeys </Typographie>
      <Typographie variant="Body-sm" component="div"> coder Monkeys </Typographie>
      <Typographie variant="Body-lg" component="div"> coder Monkeys </Typographie>
      <Typographie variant="caption-4" component="div"> coder Monkeys </Typographie>
      <Typographie variant="caption-4" weight="medium" component="div"> coder Monkeys </Typographie>
    </div> 
    
     
  
  </>
   
  );
}
