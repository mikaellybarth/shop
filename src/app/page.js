import Main from "./componentes/Main";

export default async function Home() {
  const response = await fetch("https://fakestoreapi.com/products/");
  const data = await response.json();

  return (
    <body>

    <Main/>
    
    </body>

    
  );
}
