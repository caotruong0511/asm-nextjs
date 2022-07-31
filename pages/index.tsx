import type { GetStaticProps } from "next";
import { getAll } from "../api-client/slider";
import { getAll as getAllProduct } from "../api-client/productApi";
import { getAll as getAllCateProduct } from "../api-client/cateProductApi";
import { getAll as getAllNews } from "../api-client/NewsApi";
import HomeBanner from "../components/Banner";
import HomeCategory from "../components/HomeCategory";
import HomeNews from "../components/HomeNews";
import HomeProducts from "../components/HomeProducts";
import HomeShow from "../components/HomeShow";
import TimeActivities from "../components/HomeTimeActivities";
import HomeWhy from "../components/HomeWhy";
import { Slider } from "../models/slider";
import { Product } from "../models/product";
import { CateProduct } from "../models/cateProduct";
import { News } from "../models/news";
import Head from "next/head";

type HomeProps = {
  sliders: Slider[];
  products: Product[];
  listCategory: CateProduct[];
  newsList: News[];
};

const Home = ({ sliders, products, listCategory, newsList }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Tea House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeBanner sliders={sliders} />
      <HomeCategory listCategory={listCategory} />
      <HomeWhy />
      <HomeProducts products={products} />
      <TimeActivities />
      <HomeNews newsList={newsList} />
      <HomeShow />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const sliders = await getAll();
  const products = await getAllProduct();
  const listCategory = await getAllCateProduct();
  const newsList = await getAllNews();

  if (!sliders || !products || !listCategory || !newsList) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      sliders,
      products,
      listCategory,
      newsList,
    },
    revalidate: 60,
  };
};

export default Home;
