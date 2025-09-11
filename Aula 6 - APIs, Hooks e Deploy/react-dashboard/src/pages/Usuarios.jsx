import { useEffect, useState } from "react";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((erro) => console.log(erro))
      .finally(console.log("Carregamento Finalizado!"));
  });

  return (
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold">Usuários</h1>
      <p className="mt-2 text-gray-600">Página de usuários.</p>

      {usuarios.map((pegaItem) => (
        <div key={pegaItem.id}>
          <p>{pegaItem.name}</p>
          <p>{pegaItem.email}</p>
          <p>{pegaItem.address.city}</p>
        </div>
      ))}
    </div>
  );
}
