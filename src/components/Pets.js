import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Pets() {
  const [pets, setPets] = useState([]);

  // Para excluir ou editar a ideia é a mesma, vc associa um botão à ação e chama no onClick
  const fetchPets = async () => {
    try {
      const result = await axios.get("URL PETS");
      setPets(result.data);
    } catch (error) {
      console.log("Error fetching pets", error);
    }
  };

  useEffect(() => {
    fetchPets();
  }, []);

  return (
    <table>
      <th>Nome Pet</th>

      <tr>
        {pets.map((pet) => (
          <td key={Math.random()}>{pet.nome}</td>
        ))}
      </tr>
    </table>
  );
}
