import { readFileSync } from "fs";
import { getEnvironment, Env } from "./environment";
import { merge } from "./merge";
<<<<<<< HEAD

const file = process.env.SERVER_CONFIG ?? "server.config.json"
const data = JSON.parse(readFileSync(file).toString());

=======
const file = process.env.SERVER_CONFIG ?? "server.config.json"
const data = JSON.parse(readFileSync(file).toString());
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
try {
    const envFile = getEnvironment().toString() + "." + file;
    const envData = JSON.parse(readFileSync(envFile).toString());
    merge(data, envData);
} catch {
    // do nothing - file doesn't exist or isn't readable
}
<<<<<<< HEAD

=======
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
export const getConfig = (path: string, defaultVal: any = undefined) : any => {
    const paths = path.split(":");
    let val = data;
    paths.forEach(p => val = val[p]);
    return val ?? defaultVal;
}
<<<<<<< HEAD

=======
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
export { getEnvironment, Env };
