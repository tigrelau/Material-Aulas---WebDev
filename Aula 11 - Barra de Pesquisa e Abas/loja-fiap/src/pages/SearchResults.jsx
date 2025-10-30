import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";


const SearchResults = () => {

const{termoBusca}= useParams();

  const [products, setProducts] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`${API_URL}`);
      const data = await res.json();
      setProducts(data);
    };
    fetchProduct();
  }, []);

  const produtosFiltrados = products.filter(pegaItem => pegaItem.title.toLowerCase().includes(termoBusca.toLowerCase()))

  if(produtosFiltrados.length < 1){
    return <p className="text-2xl text-center text-orange-400 font-semibold"> Nenhum produto encontrado :( </p>
  }

    return (
        <div>
            <h1 className="text-2xl font-bold">Resultados da Pesquisa para: {termoBusca}</h1>
            <SectionContainer title="Resultados">
            {produtosFiltrados.map(pegaItem =>(
                <ProductCard {...pegaItem}/>   
            ))}
            </SectionContainer>
        </div>
    );
};

export default SearchResults;