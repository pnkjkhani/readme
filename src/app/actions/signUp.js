
import prisma from '@/utils/connect';
import bcrypt from 'bcryptjs';
export const signUp = async (name, email, password) => {
    console.log(email, password)
    try {
        const user = await prisma.User.findUnique({
            where: {
                email,
            },
        });
        console.log(email)

        if (user) {
            console.log(user)
            return { msg: 'User with that email already exists.', status: 402 };
        }
        const passwordHash = bcrypt.hashSync(password, 10);

        try {

            await prisma.User.create({
                data: {
                    name,
                    email,
                    password: passwordHash,
                },
            });
            return { msg: "Successfully created new user!", status: 201 };

        } catch (error) {
            console.log(error)
            return { msg: "Server Error", status: 500 };

        }
    } catch (error) {
        console.log(error)
    }

};