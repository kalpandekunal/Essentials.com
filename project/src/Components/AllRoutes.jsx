import HomePage from "../Pages/HomePage";
import { Routes,Route } from "react-router-dom";
import NewArrivals from "../Pages/NewArrivals";
import CasesSleeves from "../Pages/Cases&Sleeves";
import Accessories from "../Pages/Accessories";
import BagsWallets from "../Pages/Bags&Wallets";
import HomeOffice from "../Pages/HomeOffice";
import Collections from "../Pages/Collections";
import Account from "../Pages/Account";
import Pangea from "../Pages/Pangea";
import Watch from "../Pages/Watch";
import WatchDetails from "../Pages/WatchDetails";
import Cart from "../Pages/Cart";

function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/newarrivals" element={<NewArrivals />}/>
            <Route path="/casessleeves" element={<CasesSleeves />}/>
            <Route path="/accessories" element={<Accessories />}/>
            <Route path="/bagswallets" element={<BagsWallets />}/>
            <Route path="/homeoffice" element={<HomeOffice />}/>
            <Route path="/collections" element={<Collections />}/>
            <Route path="/accounts" element={<Account />}/>
            <Route path="/pangea" element={<Pangea />}/>
            <Route path="/watch" element={<Watch />}/>
            <Route path="/watch/:user_id" element={<WatchDetails />}/>
            <Route path="/cart" element={<Cart />}/>
        </Routes>
    )
}

export default AllRoutes;