const makeSql = () => {
    return 'ESM: makeSql';
}

const toSql = () => {
    return 'ESM: toSql';
}

const bind = () => {
    return 'ESM: bind';
}

const whatIsMyIp = () => {
    return 'ESM: whatIsMyIp (DB)';
}

const DB = () => {
    return {
        name: 'DBN',
    };
}

// const aboboraLaranja = bind;

export {
    makeSql,
    toSql,
    bind,
    DB,
    // aboboraLaranja,
    bind as aboboraLaranja,
    whatIsMyIp,
};

export default DB;
