import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../assets/svg/logo_circle.svg"
import HeaderButton from "../components/views/header/HeaderButton";
import PersonIcon from '@mui/icons-material/Person';
import Button from "../components/ui/Button";
// import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SwipeableTemporaryDrawer from "../components/views/header/SwipeableTemporaryDrawer";
import IconButton from "../components/ui/IconButton";
import InstagramIcon from "../assets/icons/instagram.svg";
import FacebookIcon from "../assets/icons/facebook.svg";

const Header = () => {
  return (
    <div className="select-none flex flex-row h-24 bg-green-primary-500 justify-between">
        <Link to="/" className="flex flex-row items-center justify-center xl:hidden">
            <div className="pl-3">
                <img className="h-20" src={Logo} alt=""/>
            </div>
        </Link>
        <div className="flex-1 hidden flex-row gap-8 items-center xl:flex ml-10">
          <Link to="/" className="flex flex-row items-center justify-center">
              <div className="pl-3">
                  <img className="h-20" src={Logo} alt=""/>
              </div>
          </Link>
        <HeaderButton label="Home" to="/"/>
        <HeaderButton label="Search Ticket" to="/tickets"/>
        <IconButton icon={InstagramIcon} link=""/>
        <IconButton icon={FacebookIcon} link=""/>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end pr-5">

        </div>
        <div className="flex-1 flex flex-row gap-4 sm:gap-8 items-center justify-end pr-5">
        {/*<HeaderSearchBar/>*/}
            <Button label="Sign in" to="/login" icon={<PersonIcon />} className="hidden xl:flex w-auto bg-green-primary-700 hover:bg-green-primary-600 text-green-primary-50 border border-transparent hover:border-yellow-primary hover:shadow-sm" />
            {/*<Button to="/cart" label="Cart" icon={<ShoppingBasketIcon />} className="bg-gray-100 border border-transparent hover:border-gray-300 hover:shadow-sm" />*/}
            <div className="flex xl:hidden">
              <SwipeableTemporaryDrawer/>
            </div>
        </div>
    </div>
  );
}

export default Header;
