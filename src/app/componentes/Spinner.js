import Image from "next/image";             

export default function Spinner (){
    return(
        <Image
        width={100}
        height={100}
        src= '/pulse-3.svg'
        alt = 'imagem carregando'
        />
    )
}