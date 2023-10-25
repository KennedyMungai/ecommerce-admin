'use client'
import { closeModal } from '@/Redux/features/modalSlice'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import Modal from '@/components/Modal/Modal'
import { Button } from '@/components/ui/button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as z from 'zod'

const formSchema = z.object({ name: z.string().min(1) })

type Props = {}

const ModalProvider = (props: Props) => {
	const [isMounted, setIsMounted] = useState(false)
	const [loading, setLoading] = useState(false)

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { name: '' }
	})

	const isModalOpen = useAppSelector((state) => state.modalToggle.isOpen)
	const dispatch = useAppDispatch()

	const closeModalFunc = () => dispatch(closeModal())

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setLoading(true)
			const response = await axios.post('/api/stores', values)
			toast.success('The store has been created')
			console.log(response.data)
		} catch (error: any) {
			toast.error('Something went wrong')
			console.log(error.message)
		} finally {
			setLoading(false)
		}
	}

	return (
		<Modal
			title={'Create A Store'}
			description={
				'Add a new store to manage products and their categories'
			}
		>
			<div>
				<div className='space-y-4 py-2 pb-4'>
					<Form {...form}>
						<form onSubmit={form.handleSubmit(onSubmit)}>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input
												placeholder='E-Commerce'
												disabled={loading}
												{...field}
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</form>
					</Form>
				</div>
				<div className='py-6 space-x-2 w-full flex items-center justify-end gap-10'>
					<Button
						variant={'outline'}
						onClick={closeModalFunc}
						disabled={loading}
					>
						Cancel
					</Button>
					<Button type='submit' disabled={loading}>
						Continue
					</Button>
				</div>
			</div>
		</Modal>
	)
}

export default ModalProvider
