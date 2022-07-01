/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				source: '/api/graphql',
				destination: `${
					process.env.API_BASE_URL || 'http://localhost:3000'
				}/api/graphql`,
			},
		];
	},
};

module.exports = nextConfig;
