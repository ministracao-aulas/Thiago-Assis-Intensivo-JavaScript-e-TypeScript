export const log = (...args) => {
    console.log('[log via fn log]', ...args);
}

export const safeLog = (...args) => {
    if (localStorage.getItem('log') !== 'true') {
        return;
    }

    console.log('[SAFE DEBUG LOG]', ...args);
}

export const isString = (value) => typeof value === 'string';
export const ifStringOr = (value, alter) => {
    if (isString(value)) {
        return value;
    }

    return isString(alter) ? alter : '';
};

export const lowerCase = (str) => ifStringOr(str).toLowerCase();
export const upperCase = (str) => ifStringOr(str).toUpperCase();

export function capitalize(str) {
    if (!isString(str)) {
        return '';
    }

    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function teste(valor) {
    return valor;
}
