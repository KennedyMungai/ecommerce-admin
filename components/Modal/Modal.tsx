'use client'
import { ReactNode } from 'react'

type Props = {
	title: string
	description: string
	isOpen: boolean
	onClose: () => void
	children?: ReactNode
}

const Modal = ({ title, description, isOpen, onClose, children }: Props) => {
	return <div>Modal</div>
}

export default Modal
