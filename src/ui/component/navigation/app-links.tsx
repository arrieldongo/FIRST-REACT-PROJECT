import { AppLinks } from "@/types/app-links";
import { RiLinkedinFill, RiSlackFill, RiYoutubeFill } from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [ 

  {
    label: "Accueil",
    baseUrl: "/",
    type:"internal"
  },
  {
    label: "Projets",
    baseUrl: "/#",
    type:"internal"
  },
  {
    label: "Coder Monkeys",
    baseUrl: "/##",
    type:"internal"
  },
  {
    label: "Formations",
    baseUrl: "https://www.youtube.com/playlist?list=PLtKaauZVThjAe3U3AQqa-C1fLwHR48aMM",
    type:"external"
  },

]; 

const footerUsersLinks: AppLinks[] = [

  {
    label: "Mon espace",
    baseUrl: "/@",
    type:"internal"
  },
  {
    label: "Connexion",
    baseUrl: "/connexion",
    type:"internal"
  },
  {
    label: "Inscription",
    baseUrl: "/connexion/inscription",
    type:"internal"
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/connexion/mot-de-passe-perdu",
    type:"internal"
  },

];

const footerInformationsLinks: AppLinks[] = [

  {
    label: "CGU",
    baseUrl: "/&",
    type:"internal"
  },
  {
    label: "Confidentialité",
    baseUrl: "/&&",
    type:"internal"
  },
  {
    label: "À propos",
    baseUrl: "/&&&",
    type:"internal"
  },
  {
    label: "Contact",
    baseUrl: "/&&&&",
    type:"internal"
  },

];

export const footerSocialNetworksLinks: AppLinks[] = [

  {
    label: "Linkedin",
    baseUrl: "/",
    type:"external",
    icon: RiLinkedinFill,
  },
  {
    label: "Youtube",
    baseUrl: "/",
    type:"external",
    icon: RiYoutubeFill,

  },
  {
    label: "Slack",
    baseUrl: "/",
    type:"external",
    icon: RiSlackFill,

  },
  

];  

export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateurs ",
    links: footerUsersLinks,
  },
  {
    label: "Informations",
    links: footerInformationsLinks,
  },
  {
    label: "Réseaux ",
    links: footerSocialNetworksLinks,
  },
]