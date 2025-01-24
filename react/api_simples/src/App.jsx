// Consumindo uma API
// Primeiro passo importação
import { useState, useEffect } from "react";
import axios from "axios";

export default function App() {
  const [cartoon, setCartoon] = useState([]);

  const getData = async () => {
    const Data = await axios.get(
      "https://api.sampleapis.com/rickandmorty/characters"
    );

    setCartoon(Data.data[0]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>API</h1>
      <h2>Aplication Program Interface</h2>
      <h3>(Interface de Programação de Aplicação)</h3>
      
      <article>
        <img src={cartoon.image} alt={cartoon.name} />
        <h2>{cartoon.name}</h2>
        <p>{cartoon.status}</p>
        <p>{cartoon.type}</p>
        <p>{cartoon.gender}</p>
        <p>{cartoon.origin}</p>
      </article>
    </>
  );
}
