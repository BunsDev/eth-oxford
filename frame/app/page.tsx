import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Add to wishlist',
    },
  ],
  image: {
    src:"https://bafkreigvc7m4h756xbdn2gnkuphke2ma2u5ti63ruyyc33y2r3i67lpyhy.ipfs.nftstorage.link/",
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/details`,
});

export const metadata: Metadata = {
  title: 'Invest frame oportunity',
  description: 'LFG',
  openGraph: {
    title: 'Invest frame oportunity',
    description: 'Invest frame oportunity',
    images: ["https://bafkreigvc7m4h756xbdn2gnkuphke2ma2u5ti63ruyyc33y2r3i67lpyhy.ipfs.nftstorage.link/"],
  },
  other: {
    ...frameMetadata,
  },
};

export default function Page() {
  return (
    <>
      <h1>Heyyyyyyyyyyyyyy</h1>
    </>
  );
}
