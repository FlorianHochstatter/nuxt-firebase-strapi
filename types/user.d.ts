export {};

declare global {

    interface User {
        id?: number | null;
        email: string;
        username: string;
        blocked?: boolean;
        confirmed?: boolean;
        createdAt?: string;
        provider?: string;
        updatedAt?: string;
    }
}
