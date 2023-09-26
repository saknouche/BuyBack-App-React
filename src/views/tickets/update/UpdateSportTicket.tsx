import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {UseFormReturn} from 'react-hook-form';
import { toast } from 'react-toastify';
import {SportTicketPost, TicketCategoriesGet} from '../../../models/TicketModel';
import { TicketService } from '../../../services/Ticket';
import Textfield from '../../../components/ui/Textfield';
import Button from '../../../components/ui/Button';
import {AttachMoney, CalendarMonth, LocationOn, LocationSearching} from "@mui/icons-material";
import {DialogBody, DialogHeader} from '@material-tailwind/react';
import Select from "../../../components/ui/Select";
import Textarea from "../../../components/ui/Textarea";

export type UpdateSportTicketProps = {
    id: number | string;
    form: UseFormReturn<SportTicketPost>;
}
const UpdateSportTicket = ({id, form}: UpdateSportTicketProps) => {
   // const { id } = useParams();
   const navigate = useNavigate();

   const [categories, setCategories] = useState<TicketCategoriesGet[]>([]);
   useEffect(() => {
       const ticketService = new TicketService();
      ticketService
         .getAllSportCategories()
         ?.then((res) => setCategories(res.data));
   }, []);

   const submit = (data: SportTicketPost) => {
       const ticketService = new TicketService();
      ticketService
         .updateSportTicket(id, data)
         ?.then((res) => {
            console.log(res.data);
            toast.success(res.data.message);
            navigate('/user/for-sale');
             navigate(0);
         })
         .catch((error) => {
            console.log(error.response.data);
            toast.error(error.response.data.message);
         });
   };
   return (
       <>
           <DialogHeader className={"bg-green-primary-500 text-green-primary-50 rounded-t-xl"}>
               <div className={"w-full flex justify-between items-center"}>
                   Edit
               </div>
           </DialogHeader>
          <DialogBody className='rounded-b-3xl bg-green-primary-50'>

             <form
                onSubmit={form.handleSubmit(submit)}
                className={"overflow-auto"}
             >
                <Textfield
                   form={form}
                   id='name'
                   placeholder='Name'
                   className={"w-full bg-green-primary-300"}
                />
                <Textfield
                   form={form}
                   id='price'
                   placeholder='Price'
                   className={"w-full bg-green-primary-300"}
                   prefixIcon={<AttachMoney/>}
                />
                 <Textfield
                     form={form}
                     id='addressName'
                     placeholder='Address'
                     className={"w-full bg-green-primary-300"}
                     prefixIcon={<LocationSearching/>}
                 />
                 <Textfield
                     form={form}
                     id='addressZipcode'
                     placeholder='Zipcode'
                     className={"w-full bg-green-primary-300"}
                     prefixIcon={<LocationOn/>}
                 />
                <Textfield
                    label='Start date'
                   form={form}
                   id='startDate'
                   type='date'
                   className={"w-full bg-green-primary-300"}
                    prefixIcon={<CalendarMonth/>}

                />
                <Textfield
                    label='End date'
                    form={form}
                    id='endDate'
                    type='date'
                    className={"w-full bg-green-primary-300"}
                    prefixIcon={<CalendarMonth/>}
                />
                 <Select
                     form={form}
                     label={"Category"}
                     id={"sportCategoryId"}
                     backgroundColor={"bg-green-primary-300"}
                     className={"font-semibold"}
                 >
                     <>
                         <option value={""}>--</option>
                         {categories?.map((category) => (
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
                 <Textarea
                     form={form}
                     id={"description"}
                     label={"Description"}
                     className={"w-full bg-green-primary-300"}
                     maxLength={100}
                 />
                <Button
                   type='submit'
                   label='Update'
                   className='bg-blue-400 hover:bg-blue-500 text-green-primary-50 font-semibold'
                />
             </form>
          </DialogBody>
       </>
   );
};

export default UpdateSportTicket;
