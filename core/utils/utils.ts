export const dateNowSQL = (): string => {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
};
export const isNullOrEmpty = (variable): boolean => {
    return (variable == null || variable === '' || variable === ' ' || variable === undefined);
};
export const simpleDateNowSQL = (): string => {
    return dateNowSQL().substring(0, 10);
};