import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import User from "@/models/User";
import connectDb from "@/utils/db";
import bcrypt from "bcryptjs"
import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ||"",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ||"",
            httpOptions: {
                timeout: 40000,
            },
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),

        CredentialsProvider({
            id: 'credentials',
            name: "Credentials",
            async authorize(credentials) {


                try {
                    await connectDb();
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("wrong credentials");
                        }
                    } else {
                        throw new Error("User not found");
                    };
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
    ],
    pages: {
        error: "/dashboard/login"
    },
}


export const getAuthSession = () => getServerSession(authOptions);