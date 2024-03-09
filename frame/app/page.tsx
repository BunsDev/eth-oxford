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
    src:"https://opengraph.b-cdn.net/production/documents/95546111-21b8-4ee5-a228-7093cec6e7b3.png?token=wi3Kf7Qfb__3otpmdX5gF1C5Z0FBpKPsOfA6-3Vbed4&height=487&width=1200&expires=33243713089",
    aspectRatio: '1:1',
  },
  postUrl: `${NEXT_PUBLIC_URL}/api/details`,
});

export const metadata: Metadata = {
  title: 'Invest frame oportunity',
  description: 'LFG',
  openGraph: {
    title: 'zizzamia.xyz',
    description: 'Invest frame oportunity',
    images: ["https://opengraph.b-cdn.net/production/documents/95546111-21b8-4ee5-a228-7093cec6e7b3.png?token=wi3Kf7Qfb__3otpmdX5gF1C5Z0FBpKPsOfA6-3Vbed4&height=487&width=1200&expires=33243713089"],
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
