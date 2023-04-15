/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	// proxy para cambiar rutas
	async rewrites() {
		return [
			// inglés
			{
				source: '/EN', // esta es la url a la que se hace la petición
				destination: '/pages/EN/Home', // esta es la ruta real que se devuelve
			},
			{
				source: '/about/EN',
				destination: '/pages/EN/About',
			},
			{
				source: '/technologies/EN',
				destination: '/pages/EN/Technologies',
			},
			{
				source: '/certifications/EN',
				destination: '/pages/EN/Certifications',
			},
			// español
			{
				source: '/ES',
				destination: '/pages/ES/Home',
			},
			{
				source: '/about/ES',
				destination: '/pages/ES/About',
			},
			{
				source: '/technologies/ES',
				destination: '/pages/ES/Technologies',
			},
			{
				source: '/certifications/ES',
				destination: '/pages/ES/Certifications',
			},
		];
	},
	basePath: '',
	
}

module.exports = nextConfig
