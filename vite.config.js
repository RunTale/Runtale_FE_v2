import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		proxy: {
			"/api": {
				target: "http://54.180.202.141",
				changeOrigin: true,
				secure: false,
				rewrite: (path) => path.replace(/^\/api/, ""), // '/api'를 제거하여 실제 경로로 만듭니다.
			},
		},
	},
	plugins: [react()],
});
