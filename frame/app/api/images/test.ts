import { ImageResponse } from 'next/server';

export const config = {
    runtime: 'edge'
}

export default function handler() {
    return new ImageResponse(<div>Hello World<div/>);
}

