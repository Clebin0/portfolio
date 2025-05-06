/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["v.blob.core.windows.net"], // Removi o @ e usei um domínio válido
    unoptimized: true // Necessário quando usando 'output: export'
  },
  output: 'export' // Esta linha deve estar DENTRO do nextConfig
}

module.exports = nextConfig