import { ReactNode } from "react";

export interface TicketGet {
   id: number;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   category: { id: number; name: string };
   address: { id: number; name: string; zipcode: string };
   userId: number;
   email: string;
   firstName: string;
   lastName: string
   purchaseUserEmail: string
}

export interface SportTicketPost {
   id: number;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   addressName: string;
   addressZipcode: string;
   sportcategoryId: number;
   userEmail: string;
}
export interface SpectacleTicketPost {
   id: number;
   name: string;
   price: number;
   startDate: ReactNode;
   endDate: ReactNode;
   addressName: string;
   addressZipcode: string;
   spectaclecategoryId: number;
   userEmail: string;
}

export interface TicketCategoriesGet {
   id: number;
   name: string;
}