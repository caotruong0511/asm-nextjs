import type { NextPage } from "next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeBanner from "../components/Banner";
import HomeCategory from "../components/HomeCategory";
import HomeNews from "../components/HomeNews";
import HomeProducts from "../components/HomeProducts";
import HomeShow from "../components/HomeShow";
import TimeActivities from "../components/HomeTimeActivities";
import HomeWhy from "../components/HomeWhy";
import { decrease, increment } from "../redux/counterSlice";
import { deleteProduct, getProducts } from "../redux/productSlice";
import { RootState } from "../redux/store";

const Home: NextPage = () => {
  const dispatch = useDispatch<any>();
  const count = useSelector((state: RootState) => state.counter.value);
  const products = useSelector((state: RootState) => state.product.value);

  useEffect(() => {
    (async () => {
      try {
        await dispatch(getProducts()).unwrap();
      } catch (error) {
        console.log(error);
      }
    })();
  }, [dispatch]);

  return (
    <>
      <h1>Count: {count}</h1>
      <h1>Products</h1>

      {products?.map((item, index) => (
        <div key={index}>
          <li key={index}>{item.name}</li>
          <button
            onClick={() => {
              dispatch(deleteProduct(item.id));
            }}
          >
            Delete
          </button>
        </div>
      ))}

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
