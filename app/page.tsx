import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { UserButton } from "@clerk/nextjs"

export default async function HomePage() {
	const { userId } = await auth()

	if (!userId) {
		redirect("/login")
	}

	return (
		<div>
			<UserButton />
		</div>
	)
}
