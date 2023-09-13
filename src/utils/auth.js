import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { Account, Profile, Session, User } from "next-auth";
import bcrypt from "bcryptjs"
import jwt from 'jsonwebtoken'
import { getServerSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./connect";
export const authOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),

        CredentialsProvider({
            id: 'credentials',
            name: "Credentials",
            async authorize(credentials) {
                try {
                    // await connectDb();
                    // const user = await User.findOne({ email: credentials.email });
                    // if (user) {
                    //     const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
                    //     if (isPasswordCorrect) {
                    //         return user;
                    //     } else {
                    //         throw new Error("wrong credentials");
                    //     }
                    // } else {
                    //     throw new Error("User not found");
                    // };
                    if (!credentials) {
                        return null;
                    }

                    const { email, password } = credentials;

                    const user = await prisma.user.findUnique({
                        where: {
                            email,
                        }
                    });
                    if (!user) {
                        return null;
                    }

                    const userPassword = user.password;

                    const isValidPassword = bcrypt.compareSync(password, userPassword);

                    if (!isValidPassword) {
                        return null;
                    }
                    return user;
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
        // CredentialsProvider({
        //     name: 'Credentials',
        //     credentials: {
        //         email: {
        //             label: 'Email',
        //             type: 'text',
        //             placeholder: 'your@email.com'
        //         },
        //         password: {
        //             label: 'Password',
        //             type: 'password'
        //         }
        //     },
        //     authorize: async (credentials) => {
        //         if (!credentials) {
        //             return null;
        //         }

        //         const { email, password } = credentials;

        //         const user = await prisma.user.findUnique({
        //             where: {
        //                 email,
        //             }
        //         });

        //         if (!user) {
        //             return null;
        //         }

        //         const userPassword = user.passwordHash;

        //         const isValidPassword = bcrypt.compareSync(password, userPassword);

        //         if (!isValidPassword) {
        //             return null;
        //         }

        //         return user;
        //     }
        // })
    ],
    // pages: {
    //     error: "/dashboard/login"
    // },
    pages: {
        // signIn: 'api/auth/signin',
        error: "/dashboard/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    jwt: {
        async encode({ secret, token }) {
            if (!token) {
                throw new Error('No token to encode');
            }
            return jwt.sign(token, secret);
        },
        async decode({ secret, token }) {
            if (!token) {
                throw new Error('No token to decode');
            }
            const decodedToken = jwt.verify(token, secret);
            if (typeof decodedToken === 'string') {
                return JSON.parse(decodedToken);
            } else {
                return decodedToken;
            }
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
        updateAge: 24 * 60 * 60,
    },
    callbacks: {
        async session(params) {
            if (params.session.user) {
                params.session.user.email = params.token.email;
            }

            return params.session;
        },
        async jwt(params) {
            if (params.user) {
                params.token.email = params.user.email;
            }

            return params.token;
        }
    }
}


export const getAuthSession = () => getServerSession(authOptions);