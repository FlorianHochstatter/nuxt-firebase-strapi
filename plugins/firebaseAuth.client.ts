import type {StrapiAuthenticationData, StrapiRegistrationData} from "@nuxtjs/strapi";
import {initializeApp} from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {useIsLoading} from "~/composables/useStates";

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();
    const firebaseConfig = {
        apiKey: config.public?.FIREBASE_API_KEY,
        authDomain: config.public?.FIREBASE_AUTH_DOMAIN
    };

    initializeApp(firebaseConfig);

    const auth = getAuth();
    const firebaseUser = useFirebaseUser();

    onAuthStateChanged(auth, (user) => {
        firebaseUser.value = user;

        if (user) {
            const fetchUserData = async () => {
                try {
                    const {login} = useStrapiAuth()
                    await login(<StrapiAuthenticationData>{
                        identifier: user.email,
                        password: user.accessToken
                    })
                } catch (e) {
                    const {register} = useStrapiAuth()
                    await register(<StrapiRegistrationData>{
                        username: user.email,
                        email: user.email,
                        password: user.accessToken
                    })
                }
            }
            fetchUserData().then(async () => {
                const user = useStrapiUser()
                if (user.value.email !== undefined) {
                    const isLoading = useIsLoading();
                    isLoading.value = false
                }
            });
        }
    });

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);
});
