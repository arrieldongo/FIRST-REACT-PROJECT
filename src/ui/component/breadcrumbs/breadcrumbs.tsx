import { Typographie } from "@/ui/design-system/typographie/typographie";
import clsx from "clsx";
import { useRouter } from "next/router"
import { RiHome3Line } from "react-icons/ri";
import { v4 as uuidv4 } from 'uuid';
import { Container } from "../container/container";
import Link from "next/link";


export const Breadcrumbs = () => {

  const router = useRouter()
  const asPath = router.asPath;
  const segments = asPath.split("/")
  const lastSegments = segments[segments.length-1];
  segments[0]="accueil"

  const view = segments.map((path, index) => (
    <div key={uuidv4()}>
      <Link href={
        index > 0 ? `/${segments.slice(1, index + 1).join("/")}` : "/"
      }>
        <Typographie 
          variant="caption-3" 
          component="span"  
          className={clsx(

            // condition 1
            path !== lastSegments ? "text-gray-600" : "text-gray",
            "capitalize hover:text-gray animate"
          )}>
          
          {/* {condition 2} */}
          {path !== "accueil" ? (path.replace(/-/g, " ")) : (<RiHome3Line className="inline -mt-0.5"/>)}
        </Typographie>

        {/* {condition 3} */}
        {path !== lastSegments && (
          <Typographie 
            variant="caption-2" 
            component="span" 
            className="ml-2 text-gray-600"
            >
              /
          </Typographie>
        )}
      </Link>
    </div>
  ));

  return(
    <Container  className="flex items-center gap-2 py-7">
      {view}
    </Container>
  );
}