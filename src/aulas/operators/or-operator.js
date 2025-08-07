false ?? '' ?? 10; // false
false || '' || 10; // 10

// 5 - 4 - (5 + 8 / 2) * 2 * 1 * 4;

null || undefined || null || undefined || 'Valor padrão'; //

null ?? undefined ?? null ?? false ?? 'Valor Padrão'; // False
null || undefined || null || false || 'Valor Padrão'; // 'Valor Padrão'

// null ?? undefined ?? null || false || 'Valor Padrão'; // Uncaught SyntaxError: cannot use `??` unparenthesized within `||` and `&&` expressions

(null ?? null ?? undefined) || false || 'Valor Padrão'; // 'Valor Padrão'

// null coalescing (null, undefined)


a = null;

a = 12;

a = false;

// a = a || 23;
a ||= 23; // mesma coisa que o item acima

[a, typeof a];
