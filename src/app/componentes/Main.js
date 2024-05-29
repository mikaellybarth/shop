import Image from "next/image";



export default function Main (){
    
    return(
<main className={styles.main}>
    {data.map((products) =>
    <div className={styles.card} key={products.id}>
      <p>{products.title}</p>
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