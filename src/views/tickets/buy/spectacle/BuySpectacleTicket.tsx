import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BuyTicketService } from '../../../../services/BuyTicket';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { SpectacleTicketResponse } from '../../../../models/TicketModel';
import moment from 'moment/moment';
import Checkout from './Checkout';
import { DialogBody, DialogHeader } from '@material-tailwind/react';
import {
   CalendarMonth,
   Description,
   Person,
   Place,
} from '@mui/icons-material';
import User from '../../../../classes/User';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const BuySpectacleTicket = () => {
   const { id } = useParams();
   const [ticketData, setTicketToBuy] = useState<SpectacleTicketResponse>();
   const navigate = useNavigate();

   const service = new BuyTicketService();
   useEffect(() => {
      service
         .getSpectacleTicketWithoutPurchaser(id)
         ?.then((res) => {
            if (res.status === 200) {
               setTicketToBuy(res.data);
            }
         })
         .catch((e) => {
            toast.error(e.response.data.message);
            if(e.response.data.message == null){
               toast.error("You must be connected to buy tickets");
               navigate('/login');
            }else{
               navigate('/tickets');
            }
         });
   }, []);

   return (
      <>
         <div className='flex-1 bg-green-primary-50 flex justify-center items-center flex-col'>
            {ticketData && (
               <>
                  <PayPalScriptProvider
                     options={{
                        //Insert your PayPal clientId
                        clientId:
                           'AeEkv2nSB6piXwKBs2azqJtCUJyw6krAcaeebxpuOqtMdL-I3BD8xHXHlI7j6yfGQBYBygYyP_vxI-e5',
                     }}
                  >
                     <div className='my-10 w-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-xl'>
                        <DialogHeader
                           className={
                              'bg-green-primary-500 text-green-primary-50 rounded-t-xl'
                           }
                        >
                           <div
                              className={
                                 'w-full flex justify-between items-center'
                              }
                           >
                              <div>{ticketData?.name}</div>
                              <div>
                                 {ticketData ? ticketData.price + ' €' : ''}
                              </div>
                           </div>
                        </DialogHeader>
                        <DialogBody
                           divider
                           className={
                              'flex flex-col gap-10 px-7 bg-green-primary-50 rounded-b-xl'
                           }
                        >
                           <div
                              className={
                                 'flex flex-row justify-between flex-wrap'
                              }
                           >
                              <div className={'flex flex-col gap-3'}>
                                 {ticketData?.category ? (
                                    <div
                                       className={
                                          'gap-0.5 flex flex-col justify-center flex-wrap'
                                       }
                                    >
                                       <div
                                          className={
                                             'flex flex-row items-center gap-2'
                                          }
                                       >
                                          {/*<Place fontSize={"inherit"} className={"flex flex-col justify-center items-center"} />*/}
                                          <div className={'font-semibold'}>
                                             Category
                                          </div>
                                       </div>
                                       <div>{ticketData.category.name}</div>
                                    </div>
                                 ) : (
                                    <></>
                                 )}
                                 {ticketData?.address ? (
                                    <div
                                       className={
                                          'gap-0.5 flex flex-col justify-center flex-wrap'
                                       }
                                    >
                                       <div
                                          className={
                                             'flex flex-row items-center gap-2'
                                          }
                                       >
                                          <Place
                                             fontSize={'inherit'}
                                             className={
                                                'flex flex-col justify-center items-center'
                                             }
                                          />
                                          <div className={'font-semibold'}>
                                             Place
                                          </div>
                                       </div>
                                       <div>
                                          {ticketData.address.zipcode +
                                             ' ' +
                                             ticketData.address.name}
                                       </div>
                                    </div>
                                 ) : (
                                    <></>
                                 )}

                                 {ticketData?.description ? (
                                    <div
                                       className={
                                          'gap-0.5 flex flex-col justify-center flex-wrap'
                                       }
                                    >
                                       <div
                                          className={
                                             'flex flex-row items-center gap-2'
                                          }
                                       >
                                          <Description
                                             fontSize={'inherit'}
                                             className={
                                                'flex flex-col justify-center items-center'
                                             }
                                          />
                                          <div className={'font-semibold'}>
                                             Description
                                          </div>
                                       </div>
                                       <div>{ticketData.description}</div>
                                    </div>
                                 ) : (
                                    <></>
                                 )}
                              </div>
                              <div className={'flex flex-col gap-3'}>
                                 {ticketData?.startDate ? (
                                    <div
                                       className={
                                          'gap-0.5 flex flex-col justify-center flex-wrap'
                                       }
                                    >
                                       <div
                                          className={
                                             'flex flex-row items-center gap-2'
                                          }
                                       >
                                          <CalendarMonth
                                             fontSize={'inherit'}
                                             className={
                                                'flex flex-col justify-center items-center'
                                             }
                                          />
                                          <div className={'font-semibold'}>
                                             Start date
                                          </div>
                                       </div>
                                       <div>
                                          {moment(
                                             ticketData?.startDate,
                                             'YYYY-MM-DD'
                                          )
                                             .locale(window.navigator.language)
                                             .format('L')}
                                       </div>
                                    </div>
                                 ) : (
                                    <></>
                                 )}
                                 {ticketData?.endDate ? (
                                    <div
                                       className={
                                          'gap-0.5 flex flex-col justify-center flex-wrap'
                                       }
                                    >
                                       <div
                                          className={
                                             'flex flex-row items-center gap-2'
                                          }
                                       >
                                          <CalendarMonth
                                             fontSize={'inherit'}
                                             className={
                                                'flex flex-col justify-center items-center'
                                             }
                                          />
                                          <div className={'font-semibold'}>
                                             End date
                                          </div>
                                       </div>
                                       <div>
                                          {moment(
                                             ticketData?.endDate,
                                             'YYYY-MM-DD'
                                          )
                                             .locale(window.navigator.language)
                                             .format('L')}
                                       </div>
                                    </div>
                                 ) : (
                                    <></>
                                 )}
                                 {ticketData?.seller ? (
                                    <div
                                       className={
                                          'gap-0.5 flex flex-col justify-center flex-wrap'
                                       }
                                    >
                                       <div
                                          className={
                                             'flex flex-row items-center gap-2'
                                          }
                                       >
                                          <Person
                                             fontSize={'inherit'}
                                             className={
                                                'flex flex-col justify-center items-center'
                                             }
                                          />
                                          <div className={'font-semibold'}>
                                             Seller
                                          </div>
                                       </div>
                                       <div>
                                          {ticketData?.seller?.firstname +
                                             ' ' +
                                             ticketData?.seller?.lastname}
                                       </div>
                                       <div>
                                          {(ticketData.purchaser !== null &&
                                             ticketData.purchaser?.email ===
                                                User.getUser().email) ||
                                          ticketData.seller?.email ===
                                             User.getUser().email
                                             ? ticketData?.seller?.email
                                             : ''}
                                       </div>
                                    </div>
                                 ) : (
                                    <></>
                                 )}
                                 {ticketData?.purchaser ? (
                                    <div
                                       className={
                                          'gap-0.5 flex flex-col justify-center flex-wrap'
                                       }
                                    >
                                       <div
                                          className={
                                             'flex flex-row items-center gap-2'
                                          }
                                       >
                                          <Person
                                             fontSize={'inherit'}
                                             className={
                                                'flex flex-col justify-center items-center'
                                             }
                                          />
                                          <div className={'font-semibold'}>
                                             Purchaser
                                          </div>
                                       </div>
                                       <div>
                                          {ticketData?.purchaser?.firstname +
                                             ' ' +
                                             ticketData?.purchaser?.lastname}
                                       </div>
                                       <div>
                                          {ticketData?.purchaser?.email ===
                                             User.getUser().email ||
                                          ticketData.seller?.email ===
                                             User.getUser().email
                                             ? ticketData?.purchaser?.email
                                             : ''}
                                       </div>
                                    </div>
                                 ) : (
                                    <></>
                                 )}
                              </div>
                           </div>
                        </DialogBody>
                     </div>
                     <Checkout ticket={ticketData} />
                  </PayPalScriptProvider>
               </>
            )}
         </div>
      </>
   );
};

export default BuySpectacleTicket;
