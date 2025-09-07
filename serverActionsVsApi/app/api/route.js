import { NextResponse } from "next/server";

export async function POST(request) {
  // requests sent from the client are asynchronous and are promises
  // in express request object was a simple js object because
  // express.json() middleware used to parse the body to json and
  // do the async work automatically, but in next.js none of this is done so
  // requests are still promises and we need to manually use await in here
  // and also parse them to json manually
  let data = await request.json();
  console.log(data);
  return NextResponse.json({ success: true, data });
}

// other request methods can be defined here
export async function GET(request) {}
export async function HEAD(request) {}
export async function PUT(request) {}
export async function DELETE(request) {}
export async function PATCH(request) {}
