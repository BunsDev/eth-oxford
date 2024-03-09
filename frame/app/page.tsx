import { getFrameMetadata } from '@coinbase/onchainkit/frame';
import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from './config';

const frameMetadata = getFrameMetadata({
  buttons: [
    {
      label: 'See details',
    },
    {
      action: 'tx',
      label: 'Invest in this oportunity',
      target: `${NEXT_PUBLIC_URL}/api/tx`,
      postUrl: `${NEXT_PUBLIC_URL}/api/tx-success`,
    },
  ],
  image: {
    src:"https://bafkreic4v2yi5usykx7apkobnmoikgpyams65kga6py4qi3efpcyptew4a.ipfs.nftstorage.link/",
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
    images: ["https://bafkreic4v2yi5usykx7apkobnmoikgpyams65kga6py4qi3efpcyptew4a.ipfs.nftstorage.link/"],
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
