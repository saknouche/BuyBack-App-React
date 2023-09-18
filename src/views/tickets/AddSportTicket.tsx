import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SportTicketPost, TicketCategoriesGet } from '../../models/TicketModel';
import { TicketService } from '../../services/Ticket';
import User from '../../classes/User';
import Textfield from '../../components/ui/Textfield';
import Button from '../../components/ui/Button';

const AddSportTicket = () => {
   const navigate = useNavigate();
   const form = useForm<SportTicketPost>({
      defaultValues: {
         name: '',
         price: undefined,
         startDate: '',
         endDate: '',
         addressName: '',
         addressZipcode: '',
         sportcategoryId: undefined,
         userEmail: User.getUser().email,
      },
   });

   const ticketService = new TicketService();
   const [categories, setCategories] = useState<TicketCategoriesGet[]>([]);
   useEffect(() => {
      ticketService
         .getAllSportCategories()
         ?.then((res) => setCategories(res.data));
   }, []);

   const submit = (data: SportTicketPost) => {
      ticketService
         .postSportTicket(data)
         ?.then((res) => {
            toast.success(res.data.message);
            navigate('/sportTickets');
         })
         .catch((error) => {
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
               ADD A SPORT EVENT
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
            {categories.length > 0 && (
               <>
                  <label className='font-semibold pl-2' htmlFor='categoryId'>
                     Category
                  </label>
                  <select
                     className='p-2 bg-green-primary-50 w-full rounded-lg mb-6'
                     id='categoryId'
                     {...form.register('sportcategoryId', {
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
               </>
            )}
            <Button
               type='submit'
               label='Save'
               className='bg-green-primary-400 text-white font-semibold hover:bg-green-primary-300'
            />
         </form>
      </div>
   );
};

export default AddSportTicket;
