// app/hello-today/opengraph-image.tsx
import { ImageResponse } from "next/server";
import { NextRequest } from "next/server";
import React from "react"; // Import React

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
  return new ImageResponse(
    React.createElement("div", {
      style: {
        width: size.width,
        height: size.height,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        background: "linear-gradient(45deg, #f3ec78, #af4261)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      },
      children: [
        React.createElement("h1", {
          style: {
            fontSize: "4em",
            margin: 0,
          },
          children: `Hello, ${dayName}!`,
        }),
        React.createElement("p", {
          style: {
            fontSize: "2em",
            margin: 0,
          },
          children: "Today is a great day.",
        }),
      ],
    }),
    {
      type: "png",
    }
  );
}
