"use client";

import { Transaction, TransactionType } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Badge } from "@/app/_components/ui/badge";
import { CircleIcon } from "lucide-react";

export const transactionsColumns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
   cell: ({row: {original: transaction}}) => {
    if(transaction.type == TransactionType.DEPOSIT ){
     return <Badge variant={"outline"} className="bg-muted text-lime-500 bg-lime-500 bg-opacity-10 border-none font-bold"><CircleIcon className="fill-lime-500 mr-1" size={13}/>Ganho</Badge>
    }
    if(transaction.type == TransactionType.EXPENSE){
      return <Badge variant={'outline'} className="bg-muted text-danger bg-danger bg-opacity-10 border-none font-bold"><CircleIcon className="fill-danger mr-1" size={13}/>Gasto</Badge>
    }else{
      return <Badge variant={'outline'} className="bg-muted text-white bg-white bg-opacity-10 border-none font-bold"><CircleIcon className="fill-white mr-1" size={13} />Investimento</Badge>
    }
   }
    
  },
  {
    accessorKey: "category",
    header: "Categoria",
  },
  {
    accessorKey: "paymentMethod",
    header: "Método",
  },
  {
    accessorKey: "date",
    header: "Data",
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const value = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL",
      }).format(amount);

      return <div>{value}</div>;
    },
  },
  {
    accessorKey: "actions",
    header: "",
  },
];
