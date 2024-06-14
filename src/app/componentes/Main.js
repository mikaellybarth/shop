'use client'
import Image from "next/image";
import Spinner from "./Spinner";
import { useEffect, useState } from "react";
import styles from "./main.module.css";
import styles from "./main.module.css"

export default function Main (){
  const [listProduct, setListProduct] = useState([]);

  useEffect(()=>{
    const getProduct = async () =>{
      const response = await fetch ("https://fakestoreapi.com/products");
      const data = await response.json();
      
      setListProduct(data);
    }
    getProduct();
  }, []);

  const orderAz = () =>{
    const newList = [...listProduct].sort(  (a,b)=>
          a.title.localeCompare(b.title)
    );
    setListProduct(newList);
  }

  const orderZa = () => {
    let newList = [...listProduct].sort( (a,b)=>
        a.localeCompare(b.title)
    );
    newList = newList.reverse();
    setListProduct(newList);
  }
    

   const ordermais = () =>{
    const newList = [...listProduct].sort ( (a,b)=>
          a.price - b.price
    );
    setListProduct(newList);
   }

   const ordermenos = () =>{
    let newList = [...listProduct].sort ( (a,b)=>
          a.price - b.price
    );
    newList= newList.reverse();
    setListProduct(newList);
   }

   if (listProduct[0]==null){
    return <Spinner/>
   }

  
    return(
      <>
      <div>
          <button className={styles.button} onClick={orderAz}>AZ</button>
          <button className={styles.button} onClick={orderZa}>ZA</button>
          <button className={styles.button} onClick={ordermais}>Menor preço</button>
          <button className={styles.button} onClick={ordermenos}>Maior preço</button>
      </div>
   <main className={styles.main}>
    {listProduct.map((products) =>
    <div className={styles.card} key={products.id}>
      <p>{products.title}</p>
      <p>{products.description}</p>
      <p>{products.category}</p>
        <p>{products.rating.count}</p>
      <Image
      width={200}
      height={200}
      src={products.image}
      />
    </div>
    )}
  </main>
  </>
    );
    
}