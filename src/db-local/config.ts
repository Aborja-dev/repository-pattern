import Database from 'better-sqlite3';
export const db = new Database('user.db');
db.pragma('journal_mode = WAL');

