import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './views/Home';
import NotFound from './views/NotFound';
import Login from './views/auth/Login';
import Register from './views/auth/Register';
import Header from './views/Header';
import ProtectedAuthRoute from './classes/ProtectedAuthRoute';
import TestView from './views/TestView';
import SportTickets from './views/tickets/SportTickets';
import SpectacleTickets from './views/tickets/SpectacleTickets';
import ShowSportTicket from './views/tickets/ShowSportTicket';
import ShowSpectacleTicket from './views/tickets/ShowSpectacleTicket';
import UpdateSportTicket from './views/tickets/UpdateSportTicket';
import AddSportTicket from './views/tickets/AddSportTicket';
import AddSpectacleTicket from './views/tickets/AddSpectacleTicket';
import UpdateSpectacleTicket from './views/tickets/UpdateSpectacleTicket';
const exclusionArray = ['/login', '/register'];

function App() {
   const location = useLocation();
   return (
      <div className='h-screen flex flex-col'>
         {exclusionArray.indexOf(location.pathname) < 0 && <Header />}
         <div className='flex flex-1 overflow-y-auto'>
            <Routes>
               <Route path='/'>
                  <Route path='/test' element={<TestView />} />
                  <Route index element={<Home />} />
                  <Route
                     path='/login'
                     element={
                        <ProtectedAuthRoute>
                           <Login />
                        </ProtectedAuthRoute>
                     }
                  />
                  <Route
                     path='/register'
                     element={
                        <ProtectedAuthRoute>
                           <Register />
                        </ProtectedAuthRoute>
                     }
                  />
                  <Route path='/sportTickets' element={<SportTickets />} />
                  <Route
                     path='/showSportTicket/:id'
                     element={<ShowSportTicket />}
                  />
                  <Route
                     path='/addSportTicket'
                     element={<AddSportTicket />}
                  />
                  <Route
                     path='/updateSportTicket/:id'
                     element={<UpdateSportTicket />}
                  />
   
                  <Route
                     path='/spectacleTickets'
                     element={<SpectacleTickets />}
                  />
                  <Route
                     path='/showSpectacleTicket/:id'
                     element={<ShowSpectacleTicket />}
                  />
                   <Route
                     path='/addSpectacleTicket'
                     element={<AddSpectacleTicket />}
                  />
                    <Route
                     path='/updateSpectacleTicket/:id'
                     element={<UpdateSpectacleTicket />}
                  />
                  <Route path='/*' element={<NotFound />} />
               </Route>
            </Routes>
         </div>
      </div>
   );
}

export default App;
