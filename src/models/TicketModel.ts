import { ReactNode } from "react";
import {UserPublish} from "./UserModel";

export interface SportTicketResponse {
   id: number;
   name: string;
   price: number;
   startDate: string;
   endDate: string;
   address: { id: string; name: string; zipcode: string };
   category: { id: string; name: string };
   description?: string;
   seller: UserPublish;
   purchaser: UserPublish;
}

export interface SpectacleTicketResponse {
   id: number;
   name: string;
   price: number;
   startDate: string;
   endDate: string;
   address: { id: string; name: string; zipcode: string };
   category: { id: string; name: string };
   description?: string;
   seller: UserPublish;
   purchaser: UserPublish;
}

export interface TicketGet {
   id: string;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   category: { id: string; name: string };
   address: { id: string; name: string; zipcode: string };
   userId: string;
   email: string;
   firstName: string;
   lastName: string
   purchaseUserEmail: string
}

export interface SportTicketPost {
   id: string;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   addressName: string;
   addressZipcode: string;
   sportcategoryId: string;
   userEmail: string;
}
export interface SpectacleTicketPost {
   id: string;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   addressName: string;
   addressZipcode: string;
   spectaclecategoryId: string;
   userEmail: string;
}

export interface TicketCategoriesGet {
   id: string;
   name: string;
}