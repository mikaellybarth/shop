import Image from "next/image";
export default function Header (){
    return(
        <header className={styles.logo}>
            <Image
            width={100}
            height={100}
            src={"https://www.ifms.edu.br/marcaifms.png"}  />´

            <nav>
                <ul>
                <Link href="/carrinho">
                    <li>carrinho</li>
                    </Link>
                </ul>
            </nav>
            </header>
    )
     
    }