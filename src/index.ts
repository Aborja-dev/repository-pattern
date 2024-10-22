import { generateEmail, getRandomName } from './../utils/helpers';
//import { UserRepository } from './supabase/repository'; // usar supabase
import { UserRepository } from './db-local/repository'; // usar sqlite
import * as fs from 'fs';

const generateTxtFromJson = (jsonData, filename) => {
    // Convertir el objeto JSON a una cadena
    const dataString = JSON.stringify(jsonData, null, 2); // Formatea el JSON con indentación de 2 espacios
    // Escribir la cadena en un archivo .txt
    fs.writeFile(filename, dataString, 'utf8', (err) => {
        if (err) {
            console.error(`Error al escribir el archivo ${filename}:`, err);
            return;
        }
        console.log(`Archivo ${filename} generado exitosamente.`);
    });
};

(async () => {
    const user = await UserRepository.insertUser(getRandomName(), generateEmail(), '123456');
    console.log(user);
    console.log(await UserRepository.getAll());
    console.log(await UserRepository.getBy({key: 'email', value: user.email}));
    console.log(await UserRepository.updateUser({name: 'fulanito'}, 1));
    console.log(await UserRepository.getAll());
    const user2 = await UserRepository.insertUser('se borro', 'S4inC5j9@email.com', '123456');
    console.log(await UserRepository.deleteUser(user2.id));
    const data = await UserRepository.getAll();
    generateTxtFromJson(data, 'users.txt');
})()