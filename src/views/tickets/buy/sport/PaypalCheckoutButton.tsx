import { SportTicketResponse } from '../../../../models/TicketModel';
import { PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { BuyTicketService } from '../../../../services/BuyTicket';
import { useNavigate } from 'react-router-dom';

type Props = {
   ticket: SportTicketResponse;
};

const PaypalCheckoutButton = ({ ticket }: Props) => {
   const navigate = useNavigate();
   const [paidFor, setPaidFor] = useState(false);
   const [error, setError] = useState<Record<string, unknown>>();

   const handleApprove = (id: string) => {
      //Call backend function de fufill order
      const service = new BuyTicketService();
      service
         .buySportTicket(id)
         ?.then((res) => {
            setPaidFor(true);
         })
         .catch((e) => {
            toast.error(e.response.data.message)
         });
   };

   if (paidFor) {
      //Display success message
      toast.success('Thank you for your purchase !');
      navigate('/user/purchased');
   }

   if (error) {
      //Display error message
      toast.error('error', error);
   }
   return (
      <div>
         <PayPalButtons
            style={{
               color: 'gold',
               layout: 'horizontal',
               tagline: false,
               height: 48,
               shape: 'pill',
            }}
            onClick={(data, actions) => {
               //Validate on button click, client or server side
               // const hasAlreadyBoughtCourse = false
               // if(hasAlreadyBoughtCourse){
               //     setError("You already bought this course. Go to your account ")
               //     return actions.reject();
               // }else{
               // }
               return actions.resolve();
            }}
            createOrder={(data, actions) => {
               return actions.order.create({
                  purchase_units: [
                     {
                        description: ticket.name,
                        amount: {
                           value: ticket.price,
                        },
                     },
                  ],
               });
            }}
            onApprove={async (data, actions) => {
               const order = await actions.order?.capture();
               console.log('order', order);
               handleApprove(ticket.id);
            }}
            onCancel={() => {
               toast.info('Operation canceled');
            }}
            onError={(err) => {
               setError(err);
               toast.error('PayPal checkout Error', err);
            }}
         />
      </div>
   );
};

export default PaypalCheckoutButton;
