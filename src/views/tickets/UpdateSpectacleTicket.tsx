import { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
   SpectacleTicketPost,
   TicketCategoriesGet,
} from '../../models/TicketModel';
import { TicketService } from '../../services/Ticket';
import Textfield from '../../components/ui/Textfield';
import Button from '../../components/ui/Button';

const UpdateSpectacleTicket: FunctionComponent = () => {
   const { id }  = useParams();
   const navigate = useNavigate();
   const ticketService = new TicketService();
   const form = useForm<SpectacleTicketPost>();

   useEffect(() => {
      ticketService
         .getOneSpectacleTicket(id)
         ?.then((res) => {
            form.setValue('name', res.data?.name);
            form.setValue('price', res.data?.price);
            form.setValue('startDate', res.data?.startDate);
            form.setValue('endDate', res.data?.endDate);
            form.setValue('addressName', res.data?.address.name);
            form.setValue('addressZipcode', res.data?.address.zipcode);
            form.setValue('spectaclecategoryId', res.data?.category.id);
         })
         .catch((e) => toast.error(e.response.data.message));
   }, []);

   const [categories, setCategories] = useState<TicketCategoriesGet[]>([]);
   useEffect(() => {
      ticketService
         .getAllSpectacleCategories()
         ?.then((res) => setCategories(res.data));
   }, []);

   const submit = (data: SpectacleTicketPost) => {
      ticketService
         .updateSpectacleTicket(id, data)
         ?.then((res) => {
            console.log(res.data);
            toast.success(res.data.message);
            navigate('/spectacleTickets');
         })
         .catch((error) => {
            console.log(error.response.data);
            toast.error(error.response.data.message);
         });
   };
   return (
      <div className='p-12 flex w-full justify-center items-center h-full'>
         <form
            onSubmit={form.handleSubmit(submit)}
            className='w-[500px] sm:min-w-[300px]'
         >
            <h2 className='font-bold mt-3 mb-2 text-center'>
               EDIT A SHOW EVENT
            </h2>
            <Textfield
               label='Name'
               form={form}
               id='name'
               placeholder='Enter event name'
            />
            <Textfield
               label='Price'
               form={form}
               id='price'
               placeholder='Enter price'
            />
            <Textfield
               label='Start date'
               form={form}
               id='startDate'
               type='date'
               placeholder='Enter date'
            />
            <Textfield label='End date' form={form} id='endDate' type='date' />
            <Textfield
               label='Address'
               form={form}
               id='addressName'
               placeholder='Enter address'
            />
            <Textfield
               label='Zipcode'
               form={form}
               id='addressZipcode'
               placeholder='Enter zipcode'
            />
            <label className='font-semibold pl-2' htmlFor='categoryId'>
               Category
            </label>
            <select
               className='p-2 bg-green-primary-50 w-full rounded-lg mb-6'
               id='sportcategoryId'
               {...form.register('spectaclecategoryId', {
                  required: true,
                  maxLength: 300,
               })}
            >
               {categories?.map((category) => (
                  <option key={category.id} value={category.id}>
                     {category.name}
                  </option>
               ))}
            </select>
            <Button
               type='submit'
               label='Update'
               className='bg-green-primary-400 text-white font-semibold hover:bg-green-primary-300'
            />
         </form>
      </div>
   );
};

export default UpdateSpectacleTicket;
