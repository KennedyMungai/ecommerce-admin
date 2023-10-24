'use client'
import Modal from '@/components/Modal/Modal'
import { useEffect, useState } from 'react'
import * as z from 'zod'

const formSchema = z.object({ name: z.string().min(1) })

type Props = {}

const ModalProvider = (props: Props) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return (
		<Modal
			title={'Create A Store'}
			description={
				'Add a new store to manage products and their categories'
			}
		/>
	)
}

export default ModalProvider
