export const metadata = {
	title: 'Tecnologías',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="es">
			<body>{children}</body>
		</html>
	)
}