'use client'
import Modal from '@/components/Modal/Modal'
import { UserButton } from '@clerk/nextjs'
import { useEffect, useState } from 'react'

const SetUpPage = () => {
	return (
		<main>
			<UserButton afterSignOutUrl='/' />
		</main>
	)
}

export default SetUpPage
