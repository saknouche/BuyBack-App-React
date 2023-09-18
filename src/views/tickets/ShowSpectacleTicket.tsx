import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { TicketService } from '../../services/Ticket';
import { TicketGet } from '../../models/TicketModel';
import Button from '../../components/ui/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteConfirmationModal from '../../components/modals/DeleteConfirmationModal';
import { toast } from 'react-toastify';

const ShowSpectacleTicket = () => {
   const { id } = useParams();
   const [ticketData, setTicketData] = useState<TicketGet>();
   const ticketService = new TicketService();
   useEffect(() => {
      ticketService
         .getOneSpectacleTicket(id)
         ?.then((res) => setTicketData(res.data))
         .catch((e) => console.log(e));
   }, []);

   const [isOpen, setIsOpen] = useState(false);
   const navigate = useNavigate();
   const handleDelete = () => {
      ticketService
         .deleteSpectacleTicket(id)
         ?.then((res) => {
            toast.success(res.data.message);
            navigate('/spectacleTickets');
         })
         .catch((e) => toast.error(e.response.data.message));
      setIsOpen(false);
   };
   return (
      <div className='w-full flex justify-center items-center p-12 flex-1 h-full'>
         {ticketData && (
            <div className='relative w-full p-4 rounded bg-green-primary-50 max-w-md shadow-lg hover:shadow-lg flex flex-col justify-between min-h-[400px]'>
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
                  Propriétaire:{' '}
                  <span className='font-bold'>
                     {ticketData.firstName} - {ticketData.lastName}
                  </span>
               </p>
               <p>
                  Contact: <span className='font-bold'>{ticketData.email}</span>
               </p>
               <div className='flex gap-3'>
                  <Button
                     label='Update'
                     prefixIcon={<EditIcon />}
                     to={`/updateSpectacleTicket/${ticketData.id}`}
                     className='bg-green-primary-400 text-xl text-white font-semibold hover:bg-green-primary-300'
                  />
                  <DeleteConfirmationModal
                     id={ticketData.id}
                     handleDelete={() => handleDelete}
                     setIsOpen={setIsOpen}
                     isOpen={isOpen}
                  />
               </div>
            </div>
         )}
      </div>
   );
};

export default ShowSpectacleTicket;
