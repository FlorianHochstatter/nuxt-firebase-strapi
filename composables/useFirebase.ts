import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
} from "firebase/auth";

/**
 * Creates a new user account with the given email and password.
 *
 * @param {string} email - The email for the new user account.
 * @param {string} password - The password for the new user account.
 * @returns {Promise} A promise that resolves with the created user object if successful, or rejects with an error object if unsuccessful.
 */
export const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    return await createUserWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

/**
 * Sign in a user with email and password.
 *
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise<void>} - A Promise that resolves when the user is signed in successfully.
 * @throws {Error} - If there is an error during the sign-in process.
 */
export const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
    return await signInWithEmailAndPassword(
        auth,
        email,
        password
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

/**
 * Authenticates a user using Google sign-in.
 *
 * @async
 * @function googleSignIn
 * @returns {Promise<void>} - A promise that resolves when the authentication is successful or
 * rejects with an error if the authentication fails.
 *
 * @example
 * // Usage
 * await googleSignIn();
 */
export const googleSignIn = async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(
        auth,
        provider
    ).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
};

/**
 * Signs out the current user.
 *
 * @async
 * @function signOutUser
 * @returns {Promise<void>} A promise that resolves when the user is successfully signed out.
 */
export const signOutUser = async () => {
    const auth = getAuth();
    return await auth.signOut();
};
