// app/hello-today/opengraph-image.tsx
import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";

export const size = {
  width: 1200,
  height: 630,
};

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export async function GET(req: NextRequest) {
  const today = new Date();
  const dayName = daysOfWeek[today.getDay()];
  return new ImageResponse(<div>Happy {dayName}!</div>, { ...size });
}
