import { Elysia } from "elysia";
import {cors} from '@elysiajs/cors'
import { envs } from "./config/envs";
import { cycleRoutes } from "./routes/cycles";

export const app = new Elysia()

.use(cors({
    credentials:true,
    origin: envs.app.CLIENT_URL ,
}))

.use(cycleRoutes)


.listen(envs.app.PORT)

console.log(`Server is running on port ${envs.app.PORT}`)


export type App = typeof app