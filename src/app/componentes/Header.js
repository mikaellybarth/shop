import Image from "next/image";
import styles from './header.module.css';

export default function Header (){
    return(
        <header className={styles.mika}>
            <div>
            <Image className={styles.logo}
            width={100}
            height={100}
            src={"https://seeklogo.com/images/D/disneys-cars-lightning-mcqueen-logo-6C17AB748F-seeklogo.com.png"}  />
        </div>
           <div>
           <Image className={styles.carroo}
            width={100}
            height={100}
            src={"https://i.pinimg.com/474x/10/b5/31/10b531c1403b8f3cf12b5a7483439ff8.jpg"}  />
           </div>

           <div>
            <button className={styles.butao}>Aicionar</button>
           </div>
           <p className={styles.frase}>As pessoas não compram bens e serviços. Elas compram relacionamentos, histórias e magia.</p>
        </header>
    )
     
    }