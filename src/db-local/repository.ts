import { db } from "./config";
import { queries, UserModelObject, UserObject } from "./schema";

const insertUser = async (name: string, email: string, password: string): Promise<UserObject> => {
    const {lastInsertRowid} = db.prepare(queries.INSERT_USER).run(name, email, password);
    const newUser = db.prepare(queries.GET_USER.BY_ID).get(lastInsertRowid) as UserModelObject;
    return newUser;
}
const getAll = async (): Promise<UserObject[]> => db.prepare(queries.GET_USER.ALL).all() as UserModelObject[];
const getBy = async ({key, value}: {key: keyof UserModelObject, value: string}): Promise<UserObject | null> => {
    if (key === 'email') {
        const user = db.prepare(queries.GET_USER.BY_EMAIL).get(value) as UserModelObject ?? null;
        return user;
    }
    if (key === 'refreshToken') {
        const user = db.prepare(queries.GET_USER.BY_REFRESH_TOKEN).get(value) as UserModelObject ?? null;
        return user;
    }
    if (key === 'id') {
        const user = db.prepare(queries.GET_USER.BY_ID).get(value) as UserModelObject ?? null;
        return user;
    }
    return null;
    
}
const updateUser = async (data: Partial<UserModelObject>, id: number): Promise<void> => {
    const {name, password, refreshToken, resetToken} = data
    if (name) db.prepare(queries.UPDATE_USER.NAME).run(name, id);
    if (password) db.prepare(queries.UPDATE_USER.PASSWORD).run(password, id);
    if (refreshToken) db.prepare(queries.UPDATE_USER.REFRESH_TOKEN).run(refreshToken, id);
    if (resetToken) db.prepare(queries.UPDATE_USER.RESET_TOKEN).run(resetToken, id);
}

const deleteUser = async (id: number): Promise<void> => {
    db.prepare(queries.DELETE_USER).run(id);
}
const close = () => db.close();
export const UserRepository = {
    insertUser,
    getAll,
    getBy,
    updateUser,
    deleteUser,
    close
};