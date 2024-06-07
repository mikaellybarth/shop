import Link from "next/link";
import styles from './footer.module.css';
import Image from "next/image";

export default function Footer(){

    return(
        <footer className={styles.rodape}>
          
            <ul className={styles.app}>
                <li>TikTok</li>
                <li>Instagram</li>
                <li>Whatsapp</li>
                <li>Faceboock</li>

            </ul>

            <p>Fundada em: 07/08/2005</p>

            <Image className={styles.imgfooter}
            width={100}
            height={100}
            src ={"https://seeklogo.com/images/D/disneys-cars-lightning-mcqueen-logo-6C17AB748F-seeklogo.com.png"}  />
           
          
        </footer>
    )
}
