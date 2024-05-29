import Link from 'next/link';
import styles from './not-found.module.css';
import "./componentes/menu.module.css"
import "./componentes/footer.module.css"


export default function NotFound(){
    return (
    <div>
        <h1 className={styles.card}>ERRO!! ESTA PAGINA NÃO EXISTE.</h1>
       <button> <a href = "/">Retornar Home</a> </button>
    </div>
    )
}