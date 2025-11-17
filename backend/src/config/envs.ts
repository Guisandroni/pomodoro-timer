import z from "zod";


export const envs = {
    app: loadAppEnvs(),
    db: loadDbEnvs(),
    auth: loadAuthEnvs(),
    }


function loadAppEnvs(){
    
        const schema = z.object({
            PORT: z.coerce.number().default(8080),
            CLIENT_URL: z.string().url(),
            NODE_ENV: z.enum(['dev', 'prod','development','production']).transform((val)=>{
              if (val === 'development') return 'dev';
              if (val === 'production') return 'prod';
            }),
        })

        return schema.parse(process.env)
}

function loadDbEnvs(){
    const schema = z.object({
        DATABASE_URL: z.url(),

    })
    return schema.parse(process.env)
}

function loadAuthEnvs(){
    const schema = z.object({
        BETTER_AUTH_SECRET: z.string().min(32),
        BETTER_AUTH_URL: z.url().default('http://localhost:3000'),
        GOOGLE_CLIENT_ID: z.string(),
        GOOGLE_CLIENT_SECRET: z.string(),
    })

    return schema.parse(process.env)
}