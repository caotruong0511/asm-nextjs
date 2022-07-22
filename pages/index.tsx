import type { NextPage } from "next";
import HomeBanner from "../components/Banner";
import HomeCategory from "../components/HomeCategory";
import HomeNews from "../components/HomeNews";
import HomeProducts from "../components/HomeProducts";
import HomeShow from "../components/HomeShow";
import TimeActivities from "../components/HomeTimeActivities";
import HomeWhy from "../components/HomeWhy";

const Home: NextPage = () => {
  return (
    <>
      <HomeBanner />
      <HomeCategory />
      <HomeWhy />
      <HomeProducts />
      <TimeActivities />
      <HomeNews />
      <HomeShow />
    </>
  );
};

export default Home;
