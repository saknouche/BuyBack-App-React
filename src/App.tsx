import React, {createContext, useState} from 'react';
import './App.css';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "./views/Home";
import NotFound from "./views/NotFound";
import Login from "./views/auth/Login";
import Register from "./views/auth/Register";
import Header from "./views/Header";
import ProtectedAlreadyConnectedRoute from "./classes/ProtectedAlreadyConnectedRoute";
import TestView from "./views/TestView";
import Profile from "./views/user/Profile";
import Tickets from "./views/user/Tickets";
import ProtectedAuthRoute from "./classes/ProtectedAuthRoute";
import Nav from "./views/user/Nav";
import Password from "./views/user/Password";
import {User as UserModel} from "./models/UserModel";
import User from "./classes/User";
import Purchased from "./views/user/tickets/purchased/Purchased";
import ForSale from "./views/user/tickets/forSale/ForSale";
import Sold from "./views/user/tickets/sold/Sold";
import AddSportTicket from "./views/tickets/add/AddSportTicket";
import AddSpectacleTicket from "./views/tickets/add/AddSpectacleTicket";
import SellTicket from "./views/user/SellTicket";
import SearchTickets from "./views/tickets/SearchTickets";
import BuySportTicket from './views/tickets/buy/sport/BuySportTicket';
import BuySpectacleTicket from "./views/tickets/buy/spectacle/BuySpectacleTicket";

const exclusionArray = [
  '/login',
  '/register',
]

type propsContext = {
    user: UserModel | undefined,
    setUser:  React.Dispatch<React.SetStateAction<UserModel | undefined>>,
}

const defaultState = {
    user: User.getUser(),
    setUser: () => {}
};

export const UserContext = createContext<propsContext>(defaultState);

function App() {
    // const {user, setUser} = useContext(UserContext);
    const [user, setUser] = useState<UserModel>()

  const location = useLocation();
  return (
      <>
        <UserContext.Provider value={{user, setUser}}>
            <div className="h-screen flex flex-col">
              {exclusionArray.indexOf(location.pathname) < 0 && <Header/>}
              <div className="flex flex-1 overflow-y-auto bg-green-primary-50">
                <Routes>
                  <Route path="" >
                    <Route index element={<Home />} />
                    <Route path="test" element={<TestView />} />
                    <Route
                        path="login"
                        element={
                          <ProtectedAlreadyConnectedRoute>
                            <Login />
                          </ProtectedAlreadyConnectedRoute>
                        }
                    />
                    <Route
                        path="register"
                        element={
                          <ProtectedAlreadyConnectedRoute>
                            <Register />
                          </ProtectedAlreadyConnectedRoute>
                        }
                    />
                    <Route
                      path="user"
                      element={
                          <ProtectedAuthRoute>
                              <Nav />
                          </ProtectedAuthRoute>
                      }
                    >
                        <Route path="profile" element={<Profile />}/>
                        <Route path="change-password" element={<Password />}/>
                        <Route path="tickets" element={<Tickets />}/>
                        <Route path="purchased" element={<Purchased />}/>
                        <Route path="for-sale" element={<ForSale />}/>
                        <Route path="sold" element={<Sold />}/>
                        <Route
                            path="sell-ticket"
                        >
                            <Route index element={<SellTicket/>}/>
                            <Route path="sport">
                                <Route path="new" element={<AddSportTicket />}/>
                            </Route>
                            <Route path="spectacle">
                                <Route path="new" element={<AddSpectacleTicket />}/>
                            </Route>
                            <Route path="*" element={<NotFound />} />
                        </Route>
                        <Route path="*" element={<NotFound />} />
                    </Route>
                      <Route
                          path="tickets"
                      >
                          <Route index element={<SearchTickets/>}/>
                          <Route path="sport/buy/:id" element={<BuySportTicket/>}/>
                          <Route path="spectacle/buy/:id" element={<BuySpectacleTicket/>}/>
                          <Route path="*" element={<NotFound />} />
                      </Route>
                    <Route path="*" element={<NotFound />} />
                  </Route>
                </Routes>
              </div>
            </div>
        </UserContext.Provider>
      </>
  );
}

export default App;
