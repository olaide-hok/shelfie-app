import {createContext, useState} from 'react';
import {ID, Permission, Role} from 'react-native-appwrite';
import {useUser} from '../hooks/useUser';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

export const BooksContext = createContext();

export function BooksProvider({children}) {
    const [books, setBooks] = useState([]);
    const {user} = useUser();

    async function fetchBooks() {
        try {
        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchBookById(id) {
        try {
        } catch (error) {
            console.log(error.message);
        }
    }

    async function createBook(data) {
        try {
            await databases.createDocument(
                DATABASE_ID,
                COLLECTION_ID,
                ID.unique(),
                {...data, userId: user.$id},
                [
                    Permission.read(Role.user(user.$id)),
                    Permission.update(Role.user(user.$id)),
                    Permission.delete(Role.user(user.$id)),
                ]
            );
        } catch (error) {
            console.log(error.message);
        }
    }

    async function deleteBook(id) {
        try {
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <BooksContext.Provider
            value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    );
}
