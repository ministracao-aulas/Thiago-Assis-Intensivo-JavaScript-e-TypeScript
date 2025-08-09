let limit = 10;
let offset = 0;

let total = 100; // hipotético
paginas = Math.ceil(total / limit);

temMaisRegistro = false;
registros = [];

buscaRegistros = async (lim, ofs) => {
    let page = ofs / 10;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${lim}&_page=${page}`);
    const data = await response?.json() || [];
    return {
        limit: lim,
        offset: ofs,
        data,
    };
}

await (async () => {
    do {
        let _data = await buscaRegistros(limit, offset);
        registros.push(_data);
        offset = offset + limit;
		// temMaisRegistro = offset <= total;
        temMaisRegistro = Array.isArray(_data.data) && _data.data?.length;
    } while(temMaisRegistro)
})()

console.log(registros, paginas, total);
