import NextAuth from "next-auth";
import authConfig from "./services/auth.config";
import { NextRequest } from "next/server";

const { auth } = NextAuth(authConfig);
export default auth(async function middleware(req: NextRequest) {});
