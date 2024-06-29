export {};

declare global {

    interface ApiBody {
        ok: true | false
        status: number
        error?: string | null
        data?: null
    }
}
