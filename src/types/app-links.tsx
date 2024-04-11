import { TypeLink } from "@/lib/type-links";
import { IconType } from "react-icons";

export interface  AppLinks {
  label: string;
  baseUrl: string;
  type: TypeLink;
  icon?: IconType;
};

export interface FooterLinks {
  label: string;
  links: AppLinks[];
}