'use client'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { UserButton } from '@clerk/nextjs'

const SetUpPage = () => {
	const isModalOpen = useAppSelector((state) => state.modalToggle.isOpen)
	const dispatch = useAppDispatch()

	return (
		<main>
			<UserButton afterSignOutUrl='/' />
		</main>
	)
}

export default SetUpPage
