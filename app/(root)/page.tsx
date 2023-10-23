'use client'
import { openModal } from '@/Redux/features/modalSlice'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { UserButton } from '@clerk/nextjs'
import { useEffect } from 'react'

const SetUpPage = () => {
	const isModalOpen = useAppSelector((state) => state.modalToggle.isOpen)
	const dispatch = useAppDispatch()

	useEffect(() => {
		if (!isModalOpen) {
			dispatch(openModal())
		}
	}, [dispatch, isModalOpen])

	return (
		<main>
			<UserButton afterSignOutUrl='/' />
		</main>
	)
}

export default SetUpPage
