import {
    createUserWithEmailAndPassword,
    signInWithPopup,
    getAuth,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
} from "firebase/auth";

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

export const signOutUser = async () => {
    const auth = getAuth();
    return await auth.signOut();
};
