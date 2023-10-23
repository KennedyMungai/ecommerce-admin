'use client'
import Modal from '@/components/Modal/Modal'
import { useEffect, useState } from 'react'

type Props = {}

const ModalProvider = (props: Props) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return <Modal title={'Test'} description={'Test Description'} />
}

export default ModalProvider
