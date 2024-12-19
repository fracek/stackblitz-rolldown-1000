import { defineConfig } from "rolldown";

export default defineConfig({
    input: './src/index.jsx',
    output: {
        dir: './rolldown-dist',
        format: 'esm',
    },
})