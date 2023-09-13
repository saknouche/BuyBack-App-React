import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import HeaderButton from "./HeaderButton";
import { SwipeableDrawer } from '@mui/material';
import Button from "../../ui/Button";
import PersonIcon from "@mui/icons-material/Person";

const SwipeableTemporaryDrawer = () => {

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  const list = () => (
    <div
      className="h-full flex flex-col w-72 bg-green-primary-700  py-5 justify-between"
      role="presentation"
      // onClick={toggleDrawer( false)}
      // onKeyDown={toggleDrawer(false)}
    >
      <div className="flex flex-col gap-6">
        {/*<div className="p-5">*/}
        {/*  <div className="cursor-pointer flex flex-row items-center justify-center bg-gray-100 rounded-3xl w-full py-2 px-4">*/}
        {/*    <input*/}
        {/*      placeholder="Search"*/}
        {/*      type="text"*/}
        {/*      className="outline-none bg-gray-100 appearance-none w-full focus:w-72 focus:px-3"*/}
        {/*    />*/}
        {/*    <SearchIcon/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <HeaderButton onClick={toggleDrawer( false)} label="Home" to="/"/>
        <HeaderButton onClick={toggleDrawer( false)} label="Search Ticket" to="/tickets"/>
      </div>
      <div className="p-2">
        <Button label="Sign in" to="/login" prefixIcon={<PersonIcon />} className="bg-black-primary text-white border border-transparent hover:border-yellow-primary hover:shadow-sm" />
      </div>

    </div>
  );

  return (
    <div>
      <React.Fragment key="right">
        <MenuIcon fontSize="large" className="cursor-pointer text-contrast" onClick={toggleDrawer(true)}/>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

export default SwipeableTemporaryDrawer;
