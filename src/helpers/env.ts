import { Env, getEnvironment } from "../config";
<<<<<<< HEAD

=======
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
export const isDevelopment = (value: any) => {
    return getEnvironment() === Env.Development
}
