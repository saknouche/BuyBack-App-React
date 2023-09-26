import { SportTicketPost, SpectacleTicketPost } from '../models/TicketModel';
import api from './Api';


export class TicketService {
   getAllSportTickets = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sports');
      } catch (error) {
         console.error(error);
      }
   };

   getAllSportTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sports');
      } catch (error) {
         console.error(error);
      }
   };

   getAllSportTicketsLimitBy = (nb: number) => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sports?nb=' + nb);
      } catch (error) {
         console.error(error);
      }
   };

   getAllSpectacleTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacles');
      } catch (error) {
         console.error(error);
      }
   };

   getAllSpectacleTicketsLimitBy = (nb: number) => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacles?nb=' + nb);
      } catch (error) {
         console.error(error);
      }
   };

   getPurchasedSportTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/user/tickets/sport/purchased');
      } catch (error) {
         console.error(error);
      }
   };

   getPurchasedSpectacleTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/user/tickets/spectacle/purchased');
      } catch (error) {
         console.error(error);
      }
   };

   getForSaleSportTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/user/tickets/sport/for-sale');
      } catch (error) {
         console.error(error);
      }
   };

   getForSaleSpectacleTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/user/tickets/spectacle/for-sale');
      } catch (error) {
         console.error(error);
      }
   };

   getSoldSportTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/user/tickets/sport/sold');
      } catch (error) {
         console.error(error);
      }
   };

   getSoldSpectacleTicketsByUser = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/user/tickets/spectacle/sold');
      } catch (error) {
         console.error(error);
      }
   };


   getOneSportTicket = (id: string | undefined) => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sports/' + id);
      } catch (error) {
         console.error(error);
      }
   };

   postSportTicket = (data: SportTicketPost) => {
      try {
         return api.post(process.env.REACT_APP_API_URL + '/sports', data);
      } catch (error) {
         console.error(error);
      }
   };
   updateSportTicket = (id: string | number, data: SportTicketPost) => {
      try {
         return api.put(process.env.REACT_APP_API_URL + '/sports/' + id, data);
      } catch (error) {
         console.error(error);
      }
   };

   deleteSportTicket = (id: number) => {
      try {
         return api.delete(process.env.REACT_APP_API_URL + '/sports/' + id);
      } catch (error) {
         console.error(error);
      }
   };

   getAllSpectacleTickets = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacles');
      } catch (error) {
         console.error(error);
      }
   };

   getOneSpectacleTicket = (id: string | undefined) => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacles/' + id);
      } catch (error) {
         console.error(error);
      }
   };
   postSpectacleTicket = (data: SpectacleTicketPost) => {
      try {
         return api.post(process.env.REACT_APP_API_URL + '/spectacles', data);
      } catch (error) {
         console.error(error);
      }
   };

   updateSpectacleTicket = (id: string | number, data: SpectacleTicketPost) => {
      try {
         return api.put(
            process.env.REACT_APP_API_URL + '/spectacles/' + id,
            data
         );
      } catch (error) {
         console.error(error);
      }
   };
   deleteSpectacleTicket = (id: number) => {
      try {
         return api.delete(process.env.REACT_APP_API_URL + '/spectacles/' + id);
      } catch (error) {
         console.error(error);
      }
   };

   getAllSportCategories = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sport/categories');
      } catch (error) {
         console.error(error);
      }
   };
   getAllSpectacleCategories = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacle/categories');
      } catch (error) {
         console.error(error);
      }
   };
}
