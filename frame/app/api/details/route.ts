import { FrameRequest, getFrameMessage, getFrameHtmlResponse } from '@coinbase/onchainkit/frame';
import { NextRequest, NextResponse } from 'next/server';
import { NEXT_PUBLIC_URL } from '../../config';

async function getResponse(req: NextRequest): Promise<NextResponse> {
  return new NextResponse(
    getFrameHtmlResponse({
      buttons: [
        {
          action: 'tx',
          label: 'Send order purchase',
          target: `${NEXT_PUBLIC_URL}/api/tx`,
          postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
        },
      ],
      image: {
        src: `https://bafkreied55f7skfo65d4yxg6ec5w2x7556mp4sifgdap7wlnunbjzf2zsa.ipfs.nftstorage.link/`,
      },
      input: {
        text: 'Max price',
      },
      postUrl: `${NEXT_PUBLIC_URL}/api/frame`,
    }),
  );
}

export async function POST(req: NextRequest): Promise<Response> {
  return getResponse(req);
}

export const dynamic = 'force-dynamic';
