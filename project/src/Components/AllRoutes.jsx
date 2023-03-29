import HomePage from "../Pages/HomePage";
import { Routes,Route } from "react-router-dom";
import NewArrivals from "../Pages/NewArrivals";
import CasesSleeves from "../Pages/Cases&Sleeves";
import Accessories from "../Pages/Accessories";
import BagsWallets from "../Pages/Bags&Wallets";
import HomeOffice from "../Pages/HomeOffice";
import Collections from "../Pages/Collections";
import Account from "../Pages/Account";

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
        </Routes>
    )
}

export default AllRoutes;