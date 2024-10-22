import { supabase } from "./config";
import { UserModelObject, UserObject } from "./schema";

const insertUser = async (name: string, email: string, password: string): Promise<UserObject> => {
    await supabase.from('users').insert({name, email, password});
    const {data: result} = await supabase.from('users').select('*').eq('email', email).single();
    return result;
}
const getAll = async (): Promise<UserObject[]> => {
    const {data: result} = await supabase.from('users').select('*');
    if (result !== null) {
        return result;
    }
    return [];
};
const getBy = async ({key, value}: {key: keyof UserModelObject, value: string}): Promise<UserObject | null> => {
    if (key === 'email') {
        const user = await supabase.from('users').select('*').eq('email', value).single();
        if (user.data !== null) {
            return user.data;
        }
        return null;
    }
    if (key === 'refreshtoken') {
        const user = await supabase.from('users').select('*').eq('refreshToken', value).single();
        if (user.data !== null) {
            return user.data;
        }
        return null;
    }
    if (key === 'id') {
        const user = await supabase.from('users').select('*').eq('id', value).single();
        if (user.data !== null) {
            return user.data;
        }
        return null;
    }
    return null;
    
}
const updateUser = async (data: Partial<UserModelObject>, id: number): Promise<void> => {
    await supabase.from('users').update(data).eq('id', id);
}

const deleteUser = async (id: number): Promise<void> => {
    await supabase.from('users').delete().eq('id', id);
}
const close = () => {
    
};
export const UserRepository = {
    insertUser,
    getAll,
    getBy,
    updateUser,
    deleteUser,
    close
};