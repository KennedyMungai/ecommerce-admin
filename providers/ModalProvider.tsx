'use client'
import { useEffect, useState } from 'react'

type Props = {}

const ModalProvider = (props: Props) => {
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		setIsMounted(true)
	}, [])

	if (!isMounted) return null

	return <div>ModalProvider</div>
}

export default ModalProvider
