import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    lib: {
      entry: path.resolve(__dirname, "src/main.js"),
      name: "appPackages",
      fileName: "app-packages",
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ["react", "react-dom", "react-router-dom"],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: "react",
          "react-dom": "react-dom",
          "react-router-dom": "react-router-dom",
        },
      },
    }
  },
});
