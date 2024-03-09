import { ImageResponse } from "next/og";
export const runtime = "edge";
export const dynamic = "force-dynamic";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div>
        <h5>Investment Opportunity</h5>
        <h5 style={{ textAlign: "center" }}>BTC/USD</h5>
        <h5 style={{ textAlign: "center" }}>Open price 70,000 USD</h5>
        <h5 style={{ textAlign: "center" }}>Close price 74,0000 USD</h5>
        <h5 style={{ textAlign: "center" }}>Stop loss 68,000 USD</h5>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
