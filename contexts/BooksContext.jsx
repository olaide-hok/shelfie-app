import {createContext, useEffect, useState} from 'react';
import {ID, Permission, Query, Role} from 'react-native-appwrite';
import {useUser} from '../hooks/useUser';
import {databases} from '../lib/appwrite';

const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID;

export const BooksContext = createContext();

export function BooksProvider({children}) {
    const [books, setBooks] = useState([]);
    const {user} = useUser();

    async function fetchBooks() {
        try {
            const response = await databases.listDocuments(
                DATABASE_ID,
                COLLECTION_ID,
                [Query.equal('userId', user.$id)]
            );

            setBooks(response.documents);
            console.log(response.documents);
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

    useEffect(() => {
        if (user) {
            fetchBooks();
        } else {
            setBooks([]);
        }
    }, [user]);

    return (
        <BooksContext.Provider
            value={{books, fetchBooks, fetchBookById, createBook, deleteBook}}>
            {children}
        </BooksContext.Provider>
    );
}
