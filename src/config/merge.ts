export const merge = (target: any, source: any) : any => {
    Object.keys(source).forEach(key => {
<<<<<<< HEAD
        if (typeof source[key] === "object" 
=======
        if (typeof source[key] === "object"
>>>>>>> 257fa3ab253be62cb3ed977c2200137ff88944f4
                && !Array.isArray(source[key])) {
            if (Object.hasOwn(target, key)) {
                merge(target[key], source[key]);
            } else {
                Object.assign(target, source[key])
            }
        } else {
            target[key] = source[key];
        }
    });
}
