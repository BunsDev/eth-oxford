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
    src:"https://bafkreickktxvbpmemnnxtcuaro3vywl5qplltqibkmycxwwfwor6qk37ti.ipfs.nftstorage.link/",
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
    images: ["https://bafkreickktxvbpmemnnxtcuaro3vywl5qplltqibkmycxwwfwor6qk37ti.ipfs.nftstorage.link/"],
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
