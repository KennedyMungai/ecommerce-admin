import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ReduxProvider from '@/Redux/ReduxProvider'

const open_sans = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Ecommerce Admin Dashboard',
	description: 'A simple ecommerce dashboard'
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<ReduxProvider>
				<html lang='en'>
					<body className={open_sans.className}>{children}</body>
				</html>
			</ReduxProvider>
		</ClerkProvider>
	)
}
