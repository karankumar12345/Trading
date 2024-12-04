


import { Route, Routes } from 'react-router-dom'
import Home from './page/Home/Home'
import Navbar from './page/Navbar/Navbar'
import Portfolio from './page/portfolio/Portfolio'
import Profile from './page/profile/Profile'
import NotFound from './page/NotFound'
import WatchList from './page/watchList/WatchList'
import Activity from './page/Activity/activity'
import Wallet from './page/Wallet/Wallet'
import PaymentDetails from './page/PaymentDetails/PaymentDetails'
import Withdrawal from './page/Withdrawal/Withdrawal'
import StockDetails from './page/StockDetails/StockDetails'
import Login from './page/Auth/Login'
import Signup from './page/Auth/Signup'
import Forget from './page/Auth/Forget'
function App() {
  

  return (
    <>

  <Navbar/>
<Routes>
 <Route path="/" element={<Home/>}/>
 <Route path="/portfolio" element={<Portfolio/>}/>
 <Route path="/profile" element={<Profile/>}/>
 <Route path="/watchlist" element={<WatchList/>}/>
 <Route path="/activity" element={<Activity/>}/>
 <Route path="/market/bitcoin" element={<StockDetails/>}/>
 <Route path="/wallet" element={<Wallet/>}/>
 <Route path="/payment-details" element={<PaymentDetails/>}/>
 <Route path="/withdrawal" element={<Withdrawal/>}/>
 <Route path="/login" element={<Login/>}/>
 <Route path="/signup" element={<Signup/>}/>
 <Route path="/forget-password" element={<Forget/>}/>


 <Route path="*" element={<NotFound/>}/>
</Routes>
 
   
    </>
  )
}

export default App
