import { Container } from "@mui/material";
import SimpleMap from "../components/contact/map";
import Products from "../components/products/product_container";
import MySlider from "../components/slider/slider";
import {faceProducts} from '../components/products/facedata'
import { useEffect, useState } from "react";
import 'antd/dist/antd.css'
import About from "../components/about";
export default function Home({products: serverProducts}) {
   const [products, setProducts] = useState(serverProducts);

  useEffect(() => {
    async function load() {
      // ${SERVER_URI}/products
      try {
        const response = await axios.get(`${SERVER_URI}/products`);
        const json = await response.data
        setProducts(json);
      } catch (error) {
        setProducts(faceProducts);
      }
    }
    if (!serverProducts) {
      
        load();
      
    }
  }, []);
  if (!products) {
        return (
          <h2
            style={{
              textAlign: 'center',
              paddingTop: '125px',
              margin: '50px 0 ',
              color: 'blue',
            }}>
            Loading ...
          </h2>
        );

  }
  return (
    <>
    <div style={{maxWidth: '1400px' , margin: '0 auto' }} >
    <MySlider />
    </div>
      <Container>
          <Products products={products} />
          <About/>
          <SimpleMap/>
      </Container>
    </>
    
    )
}
export async function getServerSideProps({req}) {
  if (!req) {
    return {
      props:{
        products: null,
      }
    };
  }

  try {
    const response = await axios.get(`${SERVER_URI}/news`);
    const products = await response.data
    return {
      props: {
        products,
      },
    };
  } catch (error) {
    return {
      props: {
        products: null,
      },
    };
  }

}