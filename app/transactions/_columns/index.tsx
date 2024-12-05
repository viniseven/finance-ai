"use client"

import { Transaction } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import TransactionTypeBadge from "../_components/badges"

export const TransactionCategoryLabel = {
	SERVICES: "Serviços",
	HOUSING: "Moradia",
	TRANSPORTATION: "Transporte",
	FOOD: "Comida",
	ENTERTAINMENT: "Entretenimento",
	HEALTH: "Saúde",
	UTILITY: "Utilidade",
	SALARY: "Ganhos",
	EDUCATION: "Educação",
	OTHER: "Outros",
}

export const TransactionMethodLabel = {
	CREDIT_CARD: "Crédito",
	DEBIT_CARD: "Débito",
	BANK_TRANSFER: "Transferência",
	BANK_SLIP: "Boleto",
	CASH: "Dinheiro",
	PIX: "Pix",
	OTHER: "Outros",
}

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
		cell: ({ row: { original: transaction } }) =>
			TransactionCategoryLabel[transaction.category],
	},
	{
		accessorKey: "paymentMethod",
		header: "Método",
		cell: ({ row: { original: transaction } }) =>
			TransactionMethodLabel[transaction.paymentMethod],
	},
	{
		accessorKey: "date",
		header: "Data",
		cell: ({ row: { original: transaction } }) =>
			new Date(transaction.date).toLocaleDateString("pt-BR", {
				day: "2-digit",
				month: "long",
				year: "numeric",
			}),
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
