/** @type {import('next').NextConfig} */
import PWA from "next-pwa"
const withPWA = PWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disableDevLogs: true,
});

const nextConfig = {};

export default withPWA(nextConfig);
