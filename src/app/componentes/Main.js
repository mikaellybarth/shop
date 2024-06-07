import Image from "next/image";
import styles from "./main.module.css"


export default async function Main (){
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();  

    return(
<main className={styles.main}>
    {data.map((products) =>
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
    );
    
}