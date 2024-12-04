"use client"

import { Transaction, TransactionCategory } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import TransactionTypeBadge from "../_components/badges"

export const transactionsColumns: ColumnDef<Transaction>[] = [
	{
		accessorKey: "name",
		header: "Nome",
	},
	{
		accessorKey: "type",
		header: "Tipo",
		cell: ({ row: { original: transaction } }) => (
			<TransactionTypeBadge transaction={transaction} />
		),
	},
	{
		accessorKey: "category",
		header: "Categoria",
		cell: ({ row: { original: transaction } }) => {
			if (transaction.category == TransactionCategory.SERVICES) {
				return "Serviços"
			}
		},
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
			const amount = parseFloat(row.getValue("amount"))
			const value = new Intl.NumberFormat("pt-br", {
				style: "currency",
				currency: "BRL",
			}).format(amount)

			return <div>{value}</div>
		},
	},
	{
		accessorKey: "actions",
		header: "",
	},
]
