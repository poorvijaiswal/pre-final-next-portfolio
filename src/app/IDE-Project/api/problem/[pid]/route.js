import { NextResponse } from "next/server";
import { problems } from "../../../../../utils/IDE-utils/problems/index.ts"

export async function GET(request, content) {
    const id = content.params.pid;
    const data = Object.entries(problems).find(([key]) => key === id)?.slice(1)[0];
    data.handlerFunction = data.handlerFunction.toString();
    return NextResponse.json(data, { status: 200 });
}