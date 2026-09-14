export enum Env {
    Development = "development", Production = "production"
}
<<<<<<< HEAD

export const getEnvironment = () : Env => {
    const env = process.env.NODE_ENV;
    return  env === undefined || env === Env.Development 
=======
export const getEnvironment = () : Env => {
    const env = process.env.NODE_ENV;
    return  env === undefined || env === Env.Development
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
        ? Env.Development : Env.Production;
}
