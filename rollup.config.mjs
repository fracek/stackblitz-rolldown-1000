import { defineConfig } from "rollup";
import commonjs from '@rollup/plugin-commonjs';
import nodeResolve from "@rollup/plugin-node-resolve";

export default defineConfig({
    input: './src/index.jsx',
    logLevel: 'silent',
    plugins:[nodeResolve({
        extensions: ['.js', '.jsx']
    }), commonjs()],
    jsx: 'react-jsx',
    output: {
        dir: './rollup-dist',
        format: 'esm',
    },
    
})