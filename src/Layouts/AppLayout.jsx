import Header from "../Pages/Header";
import BudgetCards from "../Components/BudgetCards";
import NewArrivals from "../Components/NewArrivals";
import GoldBanner from "../Components/GoldBanner";
import TopDemanded from "../Components/TopDemanded";
import BluestoneBanner from "../Components/BluestoneBanner";
import RecentProducts from "../Components/RecentProducts";
import MobileappBanner from "../Components/MobileappBanner";

const AppLayout = () => {
  return (
    <>
      <Header />
      <BudgetCards />
      <NewArrivals />
      <GoldBanner />
      <TopDemanded />
      <BluestoneBanner />
      <RecentProducts />
      <MobileappBanner />
    </>
  )
}

export default AppLayout
