import api from './Api';

export class BuyTicketService {
   getSportTicketWithoutPurchaser = (id: string | undefined) => {
      try {
         return api.get(
            process.env.REACT_APP_API_URL + '/buySportTicket/' + id
         );
      } catch (error) {
         console.error(error);
      }
   };

   buySportTicket = (id: string | undefined) => {
      try {
         return api.post(
            process.env.REACT_APP_API_URL + '/buySportTicket/' + id
         );
      } catch (error) {
         console.error(error);
      }
   };

   getSpectacleTicketWithoutPurchaser = (id: string | undefined) => {
      try {
         return api.get(
            process.env.REACT_APP_API_URL + '/buySpectacleTicket/' + id
         );
      } catch (error) {
         console.error(error);
      }
   };

   buySpectacleTicket = (id: string | undefined) => {
      try {
         return api.post(
            process.env.REACT_APP_API_URL + '/buySpectacleTicket/' + id
         );
      } catch (error) {
         console.error(error);
      }
   };
}
