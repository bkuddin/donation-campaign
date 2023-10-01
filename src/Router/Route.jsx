import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error404 from "../components/Error/Error404";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/Donation";
import Statistics from "../Pages/Statistics/Statistics";
import DonationDetails from "../Pages/DonationDetails/DonationDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('/donation.json')

            },
            {
                path: '/donation',
                element: <Donation></Donation>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>,
                loader: ()=> fetch('/donation.json')
            },
            {
                path: '/donation-details/:id',
                element: <DonationDetails></DonationDetails>,
                loader: ()=> fetch('/donation.json')
            }
        ]

    }
])

export default myCreatedRoute;