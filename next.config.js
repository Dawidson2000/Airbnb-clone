/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoiZGF3aWRkZXYiLCJhIjoiY2wwanR3Y2o0MDQ1eDNkczh4ZmJjcmh2dyJ9.eFu2gdjB-ZhUoR2GHvohpA'
  }
}

module.exports = nextConfig
