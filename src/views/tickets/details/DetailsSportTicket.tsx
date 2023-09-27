import Button from '../../../components/ui/Button';
import {SportTicketPost, SportTicketResponse} from "../../../models/TicketModel";
import {DialogBody, DialogHeader} from "@material-tailwind/react";
import {CalendarMonth, Description, Person, ShoppingCart} from "@mui/icons-material";
import moment from "moment/moment";
import React from "react";
import User from "../../../classes/User";
import Place from "@mui/icons-material/Place";
import classNames from "classnames";
import {UseFormReturn} from "react-hook-form";

export type DetailsSportTicketProps = {
   ticketData: SportTicketResponse | undefined;
}

const DetailsSportTicket = ({ticketData}: DetailsSportTicketProps) => {

   return (
      <>
         <DialogHeader className={"bg-green-primary-500 text-green-primary-50 rounded-t-xl"}>
            <div className={"w-full flex justify-between items-center"}>
               <div>
                  {ticketData?.name}
               </div>
               <div>
                  {ticketData?ticketData.price + " €": ""}
               </div>
            </div>
         </DialogHeader>
         <DialogBody divider className={"flex flex-col gap-10 px-7 bg-green-primary-50 rounded-b-xl"}>
             <div className={"flex flex-row justify-between flex-wrap"}>
                 <div className={"flex flex-col gap-3"}>
                     {
                         ticketData?.category?
                             <div className={"gap-0.5 flex flex-col justify-center flex-wrap"}>
                                 <div className={"flex flex-row items-center gap-2"}>
                                     {/*<Place fontSize={"inherit"} className={"flex flex-col justify-center items-center"} />*/}
                                     <div className={"font-semibold"}>Category</div>
                                 </div>
                                 <div>
                                     {ticketData.category.name}
                                 </div>
                             </div>
                             :
                             <></>
                     }
                     {
                         ticketData?.address?
                             <div className={"gap-0.5 flex flex-col justify-center flex-wrap"}>
                                 <div className={"flex flex-row items-center gap-2"}>
                                     <Place fontSize={"inherit"} className={"flex flex-col justify-center items-center"} />
                                     <div className={"font-semibold"}>Place</div>
                                 </div>
                                 <div>
                                     {ticketData.address.zipcode + " " + ticketData.address.name}
                                 </div>
                             </div>
                             :
                             <></>
                     }

                     {
                         ticketData?.description?
                             <div className={"gap-0.5 flex flex-col justify-center flex-wrap"}>
                                 <div className={"flex flex-row items-center gap-2"}>
                                     <Description fontSize={"inherit"} className={"flex flex-col justify-center items-center"} />
                                     <div className={"font-semibold"}>Description</div>
                                 </div>
                                 <div>
                                     {ticketData.description}
                                 </div>
                             </div>
                             :
                             <></>
                     }
                 </div>
                 <div className={"flex flex-col gap-3"}>
                    {
                       ticketData?.startDate?
                           <div className={"gap-0.5 flex flex-col justify-center flex-wrap"}>
                              <div className={"flex flex-row items-center gap-2"}>
                                 <CalendarMonth fontSize={"inherit"} className={"flex flex-col justify-center items-center"} />
                                 <div className={"font-semibold"}>Start date</div>
                              </div>
                              <div>
                                 {moment(ticketData?.startDate, "YYYY-MM-DD").locale(window.navigator.language).format('L')}
                              </div>
                           </div>
                           :
                           <></>
                    }
                    {
                       ticketData?.endDate?
                           <div className={"gap-0.5 flex flex-col justify-center flex-wrap"}>
                              <div className={"flex flex-row items-center gap-2"}>
                                 <CalendarMonth fontSize={"inherit"} className={"flex flex-col justify-center items-center"} />
                                 <div className={"font-semibold"}>End date</div>
                              </div>
                              <div>
                                 {moment(ticketData?.endDate, "YYYY-MM-DD").locale(window.navigator.language).format('L')}
                              </div>
                           </div>
                           :
                           <></>
                    }
                     {
                         ticketData?.seller?
                             <div className={"gap-0.5 flex flex-col justify-center flex-wrap"}>
                                 <div className={"flex flex-row items-center gap-2"}>
                                     <Person fontSize={"inherit"} className={"flex flex-col justify-center items-center"} />
                                     <div className={"font-semibold"}>Seller</div>
                                 </div>
                                 <div>
                                     {ticketData?.seller?.firstname + " " + ticketData?.seller?.lastname}
                                 </div>
                                 <div>
                                     {
                                         (ticketData.purchaser !== null && ticketData.purchaser?.email === User.getUser().email) || ticketData.seller?.email === User.getUser().email?
                                             ticketData?.seller?.email:""
                                     }
                                 </div>
                             </div>
                             :
                             <></>
                     }
                     {
                         ticketData?.purchaser?
                             <div className={"gap-0.5 flex flex-col justify-center flex-wrap"}>
                                 <div className={"flex flex-row items-center gap-2"}>
                                     <Person fontSize={"inherit"} className={"flex flex-col justify-center items-center"} />
                                     <div className={"font-semibold"}>Purchaser</div>
                                 </div>
                                 <div>
                                     {ticketData?.purchaser?.firstname + " " + ticketData?.purchaser?.lastname}
                                 </div>
                                 <div>
                                     {
                                         ticketData?.purchaser?.email === User.getUser().email || ticketData.seller?.email === User.getUser().email?
                                             ticketData?.purchaser?.email:""
                                     }
                                 </div>
                             </div>
                             :
                             <></>
                     }
                 </div>
             </div>
             {
                 !ticketData?.purchaser && !(ticketData?.seller?.email === User.getUser().email)?
                     <Button
                         label="Buy"
                         className={classNames("flex bg-green-primary-700 hover:bg-green-primary-600 text-green-primary-50 font-bold")}
                         prefixIcon={<ShoppingCart/>}
                         to={"/tickets/sport/buy/" + ticketData?.id}
                     />
                     :
                     <></>
             }
         </DialogBody>
      </>
   );
};

export default DetailsSportTicket;
