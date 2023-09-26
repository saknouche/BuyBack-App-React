import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { SportTicketResponse } from "../../../../models/TicketModel";

type Props = {
   ticket: SportTicketResponse
}
const Checkout = ({ticket} : Props ) => {
  
    return (
        <div className="">
          <p className="text-center pb-4 font-bold">Pay with PayPal</p>
          <PaypalCheckoutButton ticket={ticket} />
        </div>
    );
  };
  
  export default Checkout;