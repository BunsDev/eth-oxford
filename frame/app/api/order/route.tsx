import { ImageResponse } from "next/og";
export const runtime = "edge";
export const dynamic = "force-dynamic";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 40,
          color: "black",
          background: "white",
          width: "100%",
          height: "100%",
          padding: "50px 200px",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <h2>Investment Opportunity</h2>
        <h4 style={{ textAlign: "center" }}>BTC/USD</h4>
        <h4 style={{ textAlign: "center" }}>Open price 70,000 USD</h4>
        <h4 style={{ textAlign: "center" }}>Close price 74,0000 USD</h4>
        <h4 style={{ textAlign: "center" }}>Stop loss 68,000 USD</h4>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
