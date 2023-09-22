import { FunctionComponent, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { TicketService } from '../../services/Ticket';
import { TicketGet } from '../../models/TicketModel';
import { toast } from 'react-toastify';
import Button from '../../components/ui/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteConfirmationModal from '../../components/modals/DeleteConfirmationModal';

const DetailsSportTicket:FunctionComponent = () => {
   const { id } = useParams();
   const [ticketData, setTicketData] = useState<TicketGet>();
   const ticketService = new TicketService();

   useEffect(() => {
      ticketService
         .getOneSportTicket(id)
         ?.then((res) => {
            setTicketData(res.data);
         })
         .catch((e) => console.log(e));
   }, []);

   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
   const handleDelete = () => {
      ticketService
         .deleteSportTicket(Number(id))
         ?.then((res) => {
            toast.success(res.data.message);
            navigate('/sportTickets');
         })
         .catch((e) => toast.error(e.response.data.message));
      setIsOpen(false);
   };

   return (
      <div className='w-full flex justify-center items-center p-12 flex-1 h-full'>
         {ticketData && (
            <div className='relative w-full p-4 rounded bg-green-primary-50 max-w-md shadow-lg hover:shadow-2xl flex flex-col justify-between min-h-[400px]'>
               <p className='text-xl font-bold'>{ticketData.name}</p>
               <span className='absolute top-2 right-1 bg-green-primary-600 text-white p-2 rounded-lg font-bold'>
                  {ticketData.category.name}
               </span>
               <p>
                  Prix:
                  <span className='rounded-3xl bg-green-primary-600 p-2 text-white font-bold'>
                     {ticketData.price} €
                  </span>
               </p>
               <p>
                  Date de début:
                  <span className='font-bold'> {ticketData.startDate}</span>
               </p>
               <p>
                  Date de fin:
                  <span className='font-bold'> {ticketData.endDate}</span>
               </p>
               <p>
                  Lieu :
                  <span className='font-bold'>
                     {ticketData.address.name}, {ticketData.address.zipcode}
                  </span>
               </p>
               <p>
                  Propriétaire:
                  <span className='font-bold'>
                     {ticketData.firstName} {ticketData.lastName}
                  </span>
               </p>
               <p>
                  Contact: <span className='font-bold'>{ticketData.email}</span>
               </p>
               {ticketData.purchaseUserEmail === null ? (
                  <div className='flex gap-3'>
                     <Button
                        label='Update'
                        prefixIcon={<EditIcon />}
                        to={`/updateSportTicket/${ticketData?.id}`}
                        className='bg-green-primary-400 text-xl text-white font-semibold hover:bg-green-primary-300'
                     />
                     <DeleteConfirmationModal
                        id={ticketData?.id}
                        handleDelete={() => handleDelete}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                     />
                  </div>
               ) : (
                  <div className='flex justify-end'>
                     <p className='p-3 bg-red-200 rounded-xl text-center text-lg font-semibold'>Ticket sold</p> 
                  </div>
               )}
            </div>
         )}
      </div>
   );
};

export default DetailsSportTicket;
