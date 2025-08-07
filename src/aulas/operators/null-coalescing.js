// Null coalescing (null, undefined)
// || considera todos os pseudo falsos como false

// ??
// ||

null ?? undefined ?? null ?? '' ?? 0 ?? 4 ?? false ?? '' ?? 10; // ''

false ?? '' ?? 10; // false
false || '' || 10; // 10

// 5 - 4 - (5 + 8 / 2) * 2 * 1 * 4;


null || undefined || null || undefined || 'Valor padrão'; //

pessoa = {
    nome: 'Fulano',
    idade: null,
}

pessoa.idade || 'Sem idade definida';
pessoa.email || 'Sem e-mail';

pessoa.data_nascimento = '2000-01-28 12:12';

dn = pessoa.data_nascimento || null;

if (dn) {
    console.log('Idade:', new Date().getFullYear() - new Date(dn).getFullYear());
}
