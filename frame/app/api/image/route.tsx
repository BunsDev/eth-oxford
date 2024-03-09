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
          Trader info will be here!!!
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
}
