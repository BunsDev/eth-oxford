import { ImageResponse } from 'next/og'
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
            Error fetching data :(. Please try again later.
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      );
}