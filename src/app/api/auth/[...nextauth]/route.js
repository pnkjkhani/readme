import User from "@/models/User";
import connectDb from "@/utils/db";
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import bcrypt from "bcryptjs"
import CredentialsProvider from "next-auth/providers/credentials";
import { authOptions } from "@/utils/auth";

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };