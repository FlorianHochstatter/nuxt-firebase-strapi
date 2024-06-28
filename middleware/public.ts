import {Auth, onAuthStateChanged} from "firebase/auth";

export default defineNuxtRouteMiddleware(async () => {
    const {$auth} = useNuxtApp()
    if (process.client) {
        onAuthStateChanged(<Auth>$auth, (user) => {
            if (user) {
                const router = useRouter();
                router.push('/dashboard');
            }
        });
    }
});