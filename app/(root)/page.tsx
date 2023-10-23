'use client'
import { UserButton } from '@clerk/nextjs'

const SetUpPage = () => {
	return (
		<main>
			<UserButton afterSignOutUrl='/' />
		</main>
	)
}

export default SetUpPage
