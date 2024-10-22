
export interface UserModelObject {
    id: number;
    name: string;
    email: string;
    password: string;
    refreshToken?: string | null;
    resetToken?: string | null;
  }
export type UserObject = UserModelObject
const userTable = `
CREATE TABLE Users if not exists (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    refreshToken TEXT,
    resetToken TEXT,
    CONSTRAINT email_unique UNIQUE (email)
);
`;

export const queries = {
    CREATE_TABLE: userTable,
    INSERT_USER: `INSERT INTO Users (name, email, password) VALUES (?, ?, ?);`,
    UPDATE_USER: {
        REFRESH_TOKEN: `UPDATE Users SET refreshToken = ? WHERE id = ?;`,
        RESET_TOKEN: `UPDATE Users SET resetToken = ? WHERE id = ?;`,
        PASSWORD: `UPDATE Users SET password = ? WHERE id = ?;`,
        NAME: `UPDATE Users SET name = ? WHERE id = ?;`,
    },
    DELETE_USER: `DELETE FROM Users WHERE id = ?;`,
    GET_USER: {
        ALL: `SELECT * FROM Users;`,
        BY_ID: `SELECT * FROM Users WHERE id = ?;`,
        BY_EMAIL: `SELECT * FROM Users WHERE email = ?;`,
        BY_REFRESH_TOKEN: `SELECT * FROM Users WHERE refreshToken = ?;`,
    },
};