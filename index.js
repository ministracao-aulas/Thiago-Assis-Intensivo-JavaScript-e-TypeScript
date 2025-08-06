import { upperCase, safeLog, log } from "./src/helpers/str-helpers";

log('log normal Ok');
safeLog('safeLog Ok');
log(upperCase('tiago'));
log(upperCase(true));
