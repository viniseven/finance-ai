"use client"

import { Transaction } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import TransactionTypeBadge from "../_components/badges"
import { Button } from "@/app/_components/ui/button"
import { SquareArrowOutUpRight, Trash2 } from "lucide-react"

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
		cell: ({ row: { original: transaction } }) =>
			new Intl.NumberFormat("pt-BR", {
				style: "currency",
				currency: "BRL",
			}).format(Number(transaction.amount)),
	},
	{
		accessorKey: "actions",
		header: "",
		cell: () => {
			return (
				<div>
					<Button variant="ghost" className="hover:bg-transparent">
						<SquareArrowOutUpRight className="text-gray-500" />
					</Button>
					<Button variant="ghost" className="hover:bg-transparent">
						<Trash2 className="text-gray-500" />
					</Button>
				</div>
			)
		},
	},
]
