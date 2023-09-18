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

   getOneSportTicket = (id: any) => {
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
   updateSportTicket = (id: any, data: SportTicketPost) => {
      try {
         return api.put(process.env.REACT_APP_API_URL + '/sports/' + id, data);
      } catch (error) {
         console.error(error);
      }
   };

   deleteSportTicket = (id: any) => {
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

   getOneSpectacleTicket = (id: any) => {
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

   updateSpectacleTicket = (id: any, data: SpectacleTicketPost) => {
      try {
         return api.put(
            process.env.REACT_APP_API_URL + '/spectacles/' + id,
            data
         );
      } catch (error) {
         console.error(error);
      }
   };
   deleteSpectacleTicket = (id: any) => {
      try {
         return api.delete(process.env.REACT_APP_API_URL + '/spectacles/' + id);
      } catch (error) {
         console.error(error);
      }
   };

   getAllSportCategories = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/sportCategories');
      } catch (error) {
         console.error(error);
      }
   };
   getAllSpectacleCategories = () => {
      try {
         return api.get(process.env.REACT_APP_API_URL + '/spectacleCategories');
      } catch (error) {
         console.error(error);
      }
   };
}
