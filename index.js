// import { fileURLToPath } from 'url';
// import { dirname } from 'path';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

import { upperCase, safeLog, log } from "./src/helpers/str-helpers.js";

import { whatIsMyIp } from './meu-ip.js'
import whatEver, {
    DB,
    makeSql,
    toSql,
    bind,
    bind as laranjaLima,
    whatIsMyIp as whatIsMyIpDB,
    aboboraLaranja,
} from './src/helpers/DB.js'
// import './meu-ip.js';

// log('log normal Ok');

// console.log(await whatIsMyIp());
// console.log(whatEver());
// console.log(DB());
console.log(makeSql());
console.log(toSql());
console.log(bind());
console.log(aboboraLaranja());
console.log(laranjaLima());
console.log(whatIsMyIpDB());
