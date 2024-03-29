import { FunctionComponent, useEffect, useState } from 'react';
import { TicketService } from '../../services/Ticket';
import { TicketGet } from '../../models/TicketModel';
import Button from '../../components/ui/Button';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const SportTickets:FunctionComponent = () => {
   const [data, setData] = useState<TicketGet[]>([]);
   const [loading, setLoading] = useState<boolean>(false);
   const ticketService = new TicketService();
   useEffect(() => {
      setLoading(true);
      ticketService
         .getPurchasedSportTicketsByUser()
         ?.then((res) => setData(res.data))
         .catch((error) => console.log(error));
      setLoading(false);
   }, []);

    
   return (
      <>
         {loading && (
            <div
               className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
               role='status'
            >
               <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
                  Loading...
               </span>
            </div>
         )}
         <div className='bg-green-primary-50 flex flex-col flex-auto gap-3 w-full p-12 md:flex-row md:justify-center align-center'>
            {data.length > 0 &&
               data?.map((ticket) => (
                  <div
                     key={ticket.id.toString()}
                     className='relative bg-green-50 rounded overflow-hidden shadow-lg max-h-[200px] mx-auto w-[400px] flex flex-col justify-center md:min-w-[230px]'
                  >
                     <div className='px-6 py-4 flex flex-col min-h-[200px] justify-between'>
                        <div className='font-bold mb-2'>{ticket.name}</div>
                        <p className='text-gray-700 text-base'>
                           {ticket.category.name}
                        </p>
                        <p className='text-gray-dark text-xl absolute right-2 top-2 rounded-full bg-green-primary-500 px-3 text-white font-semibold'>
                           {ticket.price} €
                        </p>
                        <div className='text-left py-3'>
                           <Button
                              label='Détails'
                              prefixIcon={<RemoveRedEyeIcon />}
                              to={`/showSportTicket/${ticket.id}`}
                              className='w-1/2 bg-green-primary-500 hover:bg-green-primary-400 text-white font-semibold'
                           />
                        </div>
                     </div>
                  </div>
               ))}
         </div>
      </>
   );
};

export default SportTickets;
