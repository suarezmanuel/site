"use client";

import { useRef, useEffect } from 'react';
import { draw } from './logic';
import styles from "./page.module.css";

export default function Page() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const downloadImageRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext('2d')!;
        canvas.width = 100;
        canvas.height = 100;

        const layer_count = 7;
        const grid_size = 70;

        window.requestAnimationFrame(() => {
            draw(ctx, canvas, layer_count, grid_size)
            downloadImageRef.current!.href = canvas.toDataURL();
        });
    }, []);

    return (
        <main className={styles.main}>
            <a href='/'>Go back</a>
            <canvas ref={canvasRef}></canvas>
            <a ref={downloadImageRef} download="perlin_noise.png">Download image</a>
        </main>
    );
}
