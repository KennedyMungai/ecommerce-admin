'use client'
import Modal from '@/components/Modal/Modal'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

const formSchema = z.object({ name: z.string().min(1) })

type Props = {}

const ModalProvider = (props: Props) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { name: '' }
	})

	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		// TODO: Create Store
		console.log(values)
	}

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
