import YTDownloader from './src/yt-downloader/index.js'

const item = new YTDownloader('abc3243');

// console.log(item);
// console.log(item.getFullUrl());
console.log(item.downloaded);
console.log('finalDownloadUrl', item.finalDownloadUrl);
console.log('status', item.status);
// item.download(); // Exemplo sem async

// Exemplo não bloqueante 1
/*
item.asyncDownload();
setTimeout(() => {
    console.log('depois de 4 segundos...');
    console.log('status', item.status);
    console.log('finalDownloadUrl', item.finalDownloadUrl);
}, 4000);
/***/

// Exemplo não bloqueante 2
/*
console.log('NÃO Vou esperar terminar');
item.asyncDownload().then(res => {
    console.log('(then) Terminou!!!');
    console.log('(then) status', res.status);
    console.log('(then) finalDownloadUrl', res.finalDownloadUrl);
});
console.log('Vida que segue');
console.log('ainda não Terminou!!!');
/* */

// Exemplo bloqueante (await)
/*
console.log('Vou esperar terminar...');
await item.asyncDownload();
console.log('Terminou!!!');
console.log('status', item.status);
console.log('finalDownloadUrl', item.finalDownloadUrl);
/* */
