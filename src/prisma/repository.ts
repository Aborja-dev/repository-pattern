import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

const insertUser = async (name: string, email: string, password: string): Promise<User> => {
    const newUser = await prisma.user.create({
        data: {
            name,
            email,
            password,
        },
    });
    return newUser;
};

const getAll = async (): Promise<User[]> => {
    return await prisma.user.findMany();
};

const getBy = async (key: keyof User, value: string): Promise<User | null> => {
    if (key === 'email') {
        return await prisma.user.findUnique({
            where: { email: value },
        });
    }
    if (key === 'refreshtoken') {
        return await prisma.user.findFirst({
            where: { refreshtoken: value },
        });
    }
    if (key === 'id') {
        const userId = parseInt(value); // Convertir el id a número
        return await prisma.user.findUnique({
            where: { id: userId },
        });
    }
    return null;
};

const updateUser = async (data: Partial<User>, id: number): Promise<void> => {
    await prisma.user.update({
        where: { id },
        data,
    });
};

const deleteUser = async (id: number): Promise<void> => {
    await prisma.user.delete({
        where: { id },
    });
};

const close = async () => {
    await prisma.$disconnect();
};

export const UserRepository = {
    insertUser,
    getAll,
    getBy,
    updateUser,
    deleteUser,
    close,
};