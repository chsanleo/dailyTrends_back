export const dateNowSQL = (): string => {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
};
export const isNullOrEmpty = (variable): boolean => {
    return (variable == null || variable === '' || variable === ' ' || variable === undefined);
};