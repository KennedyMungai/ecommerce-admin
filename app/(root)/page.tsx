'use client'
import Modal from '@/components/Modal/Modal'
import { UserButton } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

const SetUpPage = () => {
	const [isRendered, setIsRendered] = useState(false)

	useEffect(() => {
		setIsRendered(true)
	}, [])

	if (!isRendered) return null

	return (
		<main>
			<UserButton afterSignOutUrl='/' />
			<Modal
				isOpen
				onClose={() => {}}
				title='Test'
				description='Test Description'
			>
				Children
			</Modal>
		</main>
	)
}

export default SetUpPage
