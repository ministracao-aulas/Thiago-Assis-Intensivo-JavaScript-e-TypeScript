import { upperCase, safeLog, log } from "./src/helpers/str-helpers";

log('log normal Ok');
safeLog('safeLog Ok');
log(upperCase('tiago'));
log(upperCase(true));
log('PASSWORD:', import.meta.env.PASSWORD);
log('VITE_PASSWORD:', import.meta.env.VITE_PASSWORD);
log('VITE_USER:', import.meta.env.VITE_USER);
console.log('Olá %s', import.meta.env.VITE_USER);
