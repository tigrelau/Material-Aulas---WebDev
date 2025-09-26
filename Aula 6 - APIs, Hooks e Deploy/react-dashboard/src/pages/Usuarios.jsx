import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function Usuarios() {
  const [users, setUsers] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  function handleClick() {
    alert("Clicou!");
  }

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>E-mail</TableHead>
          <TableHead className="text-right">Ações</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((pegaItem) => (
          <TableRow key={pegaItem.id}>
            <TableCell className="font-medium">{pegaItem.id}</TableCell>
            <TableCell>{pegaItem.name}</TableCell>
            <TableCell>{pegaItem.email}</TableCell>
            <TableCell className="text-right">
              <Button className="m-4 bg-cyan-600" onClick={handleClick}>
                Editar
              </Button>
              <Button className="m-4  bg-cyan-600">Deletar</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
