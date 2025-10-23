import { useState, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/category/electronics`)
      .then((res) => res.json())
      .then((data) => setElectronics(data));

    fetch(`${API_URL}/category/jewelery`)
      .then((res) => res.json())
      .then((data) => setJewelery(data));

    fetch(`${API_URL}/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => setMensClothing(data));

    fetch(`${API_URL}`)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
    
  const filtradosMaquiagens = allProducts.filter(pegaItem => pegaItem.title.includes('blush') || pegaItem.title.includes('lipstick') || pegaItem.description.includes('lipstick') || pegaItem.description.includes('blush'))

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        {electronics.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Joias">
        {jewelery.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        {mensClothing.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Queridinhos">
        {allProducts
        .filter(pegaItem => pegaItem.rating.rate >= 4)
        .sort((a,b) => b.rating.rate - a.rating.rate )
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Melhores Preços">
        {allProducts
        .filter(pegaItem => pegaItem.price >=50 && pegaItem.price <=100)
        .sort((a,b) => a.price - b.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>
      
      <SectionContainer title="Jaquetas e Casacos">
        {allProducts
        .filter(pegaItem => pegaItem.title.includes('jacket') || pegaItem.title.includes('coat') || pegaItem.description.includes('jacket') || pegaItem.description.includes('coat'))
        .sort((a,b) => a.price - b.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Maquiagens">
        {filtradosMaquiagens.lenght > 0 ?

        filtradosMaquiagens
        .sort((a,b) => a.price - b.price)
        .map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
        :
        <p>Nenhum produto encontrado.</p>
      }
      </SectionContainer>
    </div>
  );
}
