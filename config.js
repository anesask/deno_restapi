const env = Deno.env()

export const HOST = env.HOST || '127.0.0.1'
export const PORT = env.PORT || 5000
