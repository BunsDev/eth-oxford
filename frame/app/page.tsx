import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'Add to basket',
    },
  ],
  image: {
    src:"https://bafkreid2vop4cc6477aihn6mhn7mfky36j6rcwmaljka3jskgi3egcdua4.ipfs.nftstorage.link/",
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
    images: ["https://bafkreid2vop4cc6477aihn6mhn7mfky36j6rcwmaljka3jskgi3egcdua4.ipfs.nftstorage.link/"],
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
