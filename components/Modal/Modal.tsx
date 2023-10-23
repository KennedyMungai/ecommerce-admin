'use client'
import { ReactNode } from 'react'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle
} from '../ui/dialog'
import { useAppDispatch, useAppSelector } from '@/Redux/hooks'
import { openModal, closeModal } from '@/Redux/features/modalSlice'

type Props = {
	title: string
	description: string
	children?: ReactNode
}

const Modal = ({ title, description, children }: Props) => {
	const isModalOpen = useAppSelector((state) => state.modalToggle)
	const dispatch = useAppDispatch()

	const toggleModal = () => {
		if (isModalOpen.isOpen === true) {
			dispatch(openModal())
		} else {
			dispatch(closeModal())
		}
	}

	return (
		<Dialog
			open={isModalOpen.isOpen}
			onOpenChange={() => dispatch(toggleModal)}
		>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>{title}</DialogTitle>
					<DialogDescription>{description}</DialogDescription>
				</DialogHeader>
				<div>{children}</div>
			</DialogContent>
		</Dialog>
	)
}

export default Modal
