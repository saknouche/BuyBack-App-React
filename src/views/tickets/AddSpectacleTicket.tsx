import React, { FunctionComponent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import {
   SpectacleTicketPost,
   TicketCategoriesGet,
} from '../../models/TicketModel';
import { TicketService } from '../../services/Ticket';

import User from '../../classes/User';
import Textfield from '../../components/ui/Textfield';
import Button from '../../components/ui/Button';
import {AttachMoney, CalendarMonth, LocationOn, LocationSearching, SaveAlt} from "@mui/icons-material";
import Select from "../../components/ui/Select";
import Utils from "../../classes/Utils";

const AddSpectacleTicket: FunctionComponent = () => {
   const navigate = useNavigate();
   const form = useForm<SpectacleTicketPost>({
      defaultValues: {
         name: '',
         price: undefined,
         startDate: Utils.getDate(),
         endDate: Utils.getDate(),
         addressName: '',
         addressZipcode: '',
         spectaclecategoryId: undefined,
         userEmail: User.getUser().email,
      },
   });

   const ticketService = new TicketService();
   const [categories, setCategories] = useState<TicketCategoriesGet[]>([]);
   useEffect(() => {
      ticketService
         .getAllSpectacleCategories()
         ?.then((res) => setCategories(res.data));
   }, []);

   const submit = (data: SpectacleTicketPost) => {
      ticketService
         .postSpectacleTicket(data)
         ?.then((res) => {
            toast.success(res.data.message);
            navigate('/user/for-sale');
         })
         .catch((error) => {
            toast.error(error.response.data.message);
         });
   };
   return (
      <div className='flex-1 w-full bg-green-primary-50 flex flex-col p-5 gap-3 justify-center'>
         <h2 className='font-bold mt-3 mb-2 text-center text-4xl text-black-primary pb-5'>
            My Spectacle Ticket
         </h2>
         <form
            onSubmit={form.handleSubmit(submit)}
            className=''
         >
            <Textfield
               form={form}
               id='name'
               placeholder='Event name'
               backgroundColor={"bg-green-primary-300"}
               className={"font-semibold"}
            />
            <Textfield
               form={form}
               id='price'
               placeholder='Price'
               prefixIcon={<AttachMoney/>}
               backgroundColor={"bg-green-primary-300"}
               className={"font-semibold"}
            />
            <Textfield
               form={form}
               id='addressName'
               prefixIcon={<LocationSearching/>}
               placeholder='Address'
               backgroundColor={"bg-green-primary-300"}
               className={"font-semibold"}
            />
            <Textfield
               form={form}
               id='addressZipcode'
               placeholder='Zipcode'
               prefixIcon={<LocationOn/>}
               backgroundColor={"bg-green-primary-300"}
               className={"font-semibold"}
            />
            <Textfield
                label='Start date'
                form={form}
                id='startDate'
                type='date'
                prefixIcon={<CalendarMonth/>}
                backgroundColor={"bg-green-primary-300"}
                className={"font-semibold"}
            />
            <Textfield
                label='End date'
                form={form}
                id='endDate'
                type='date'
                prefixIcon={<CalendarMonth/>}
                backgroundColor={"bg-green-primary-300"}
                className={"font-semibold"}
            />
            <Select
                form={form}
                label={"Category"}
                id={"spectacleCategoryId"}
                backgroundColor={"bg-green-primary-300"}
                className={"font-semibold"}
            >
               <>
                  <option value={""}>--</option>
                  {categories?.map((category, index) => (

                         <option
                             key={category.id}
                             value={category.id}
                             className={"font-semibold"}
                         >
                            {category.name}
                         </option>
                  ))}
               </>
            </Select>
            <Button
                type='submit'
                label='Save'
                prefixIcon={<SaveAlt/>}
                className='bg-blue-400 hover:bg-blue-500 text-green-primary-50 font-semibold'
            />
         </form>
      </div>
   );
};

export default AddSpectacleTicket;
