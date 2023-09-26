import PaypalCheckoutButton from "./PaypalCheckoutButton";
import { SpectacleTicketResponse } from "../../../../models/TicketModel";

type Props = {
   ticket: SpectacleTicketResponse
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