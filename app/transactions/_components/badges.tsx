import { Transaction, TransactionType } from "@prisma/client"
import { CircleIcon } from "lucide-react"
import { Badge } from "@/app/_components/ui/badge"

interface TransactionsTypeBadgeProps {
	transaction: Transaction
}

export default function TransactionTypeBadge({
	transaction,
}: TransactionsTypeBadgeProps) {
	switch (transaction.type) {
		case TransactionType.DEPOSIT:
			return (
				<Badge
					variant={"outline"}
					className="border-none bg-lime-500 bg-muted bg-opacity-10 font-bold text-lime-500"
				>
					<CircleIcon className="mr-1 fill-lime-500" size={13} />
					Ganho
				</Badge>
			)

		case TransactionType.EXPENSE:
			return (
				<Badge
					variant={"outline"}
					className="border-none bg-danger bg-muted bg-opacity-10 font-bold text-danger"
				>
					<CircleIcon className="mr-1 fill-danger" size={13} />
					Gasto
				</Badge>
			)

		default:
			return (
				<Badge
					variant={"outline"}
					className="bg-muted bg-white bg-opacity-10 font-bold text-white"
				>
					{" "}
					<CircleIcon className="mr-1 fill-white" size={13} />
					Investimento
				</Badge>
			)
	}
}
