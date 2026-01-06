/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "fakestoreapi.com",
			},
			{
				protocol: "https",
				hostname: "source.unsplash.com",
			},
		],
	},
}

module.exports = nextConfig
