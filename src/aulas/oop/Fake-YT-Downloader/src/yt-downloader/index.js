class YTDownloader {
    status = null;
    started = false;
    finalDownloadUrl = null;

    constructor(videoId) {
        this.videoId = videoId;
    }

    getFullUrl() {
        return `https://www.youtube.com/watch?v=${this.videoId}`;
    }

    get fullUrl() {
        return this.getFullUrl()
    }

    get downloaded() {
        return this.finalDownloadUrl && this.status === 'downloaded' || false;
    }

    download() {
        this.started = true;
        this.status = 'started';

        setTimeout(() => {
            this.finalDownloadUrl = 'https://myapi.down.com/video/3435u3575';
            this.status = 'downloaded';
            this.started = false;
        }, 3000);

        return this;
    }

    async asyncDownload() {
        this.started = true;
        this.status = 'started';

         return new Promise((resolve) => {
            setTimeout(() => {
                this.finalDownloadUrl = 'https://myapi.down.com/video/3435u3575';
                this.status = 'downloaded';
                this.started = false;
                resolve(this);
            }, 3000);
        });
    }

    saveAs(pathToSave) {
        if (!this.finalDownloadUrl) {
            console.error(this.status === 'started' ? 'Ainda não terminou de baixar.' : 'Nada para salvar.');

            return; // Void
        }

        console.log('Aqui salvo o arquivo no caminho "%s"', pathToSave);
    }

    toString() {
        return this.toJSON();
    }

    toJSON(spaces = 2) {
        return JSON.stringify({
            status: this.status,
            started: this.started,
            finalDownloadUrl: this.finalDownloadUrl,
            fullUrl: this.fullUrl,
            downloaded: this.downloaded,
        }, null, spaces || 2);
    }
}

export default YTDownloader
