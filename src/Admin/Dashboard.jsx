import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
const Dashboard = () => {
    return(
        <div>
            <Header />
            <div className="flex">
                <Sidebar/>
                <Outlet />
            </div>
        </div>
    )
}

export default Dashboard;