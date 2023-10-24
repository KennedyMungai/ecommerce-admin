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
import {
	openModal,
	closeModal,
	selectIsOpen
} from '@/Redux/features/modalSlice'

type Props = {
	title: string
	description: string
	children?: ReactNode
}

const Modal = ({ title, description, children }: Props) => {
	const isModalOpen = useAppSelector((state) => state.modalToggle.isOpen)
	const dispatch = useAppDispatch()

	const toggleModal = () => {
		if (isModalOpen === true) {
			dispatch(closeModal())
		} else {
			dispatch(openModal())
		}
	}

	return (
		<Dialog open={isModalOpen} onOpenChange={toggleModal}>
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
