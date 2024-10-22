// pick a random name from 10 names
export const getRandomName = () => {
    const names = ['John', 'Jane', 'Bob', 'Alice', 'Charlie', 'Dave', 'Emily', 'Frank', 'Grace', 'Hannah'];
    return names[Math.floor(Math.random() * names.length)];
}
// generate random string 
export const generateEmail = (length: number = 8) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result + '@email.com';
}