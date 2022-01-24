export const onlyDigits = (str: string) => str.replace(/\D/g, '');

export const onlyString = (str: string) => str.replace(/[^a-zA-Z ]/g, '');

export const onlyFields = (only: string[], obj: {[key: string]: string; }): { [key: string]: any; }  => {
    const fields: { [key: string]: any; } = {};
    Object.keys(obj).forEach(key => {
        if (only.includes(key))  fields[key] = obj[key];
    });
    return fields;
}