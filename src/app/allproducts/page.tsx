import Products from "../../../components/Products/Product";
import Header from "../../../components/Header/Header";

const getData = async () => {
  const res = await fetch("http://localhost:3001/api/products");
  if(!res.ok){
    throw new Error("Failed to fetch data")
  }
  return res.json();
};

export default async function PageProducts(){
  const products = await getData();

  return(
    <>
      <main>
        <Header></Header>
        
        <Products products={products}/>
      </main>
    </>
  )
}







