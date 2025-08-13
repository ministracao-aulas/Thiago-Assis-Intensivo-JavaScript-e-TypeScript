export const CHECK_IP_INFO = {
    url: 'https://ifconfig.me/ip',
    method: 'GET',
    dataType: 'text',
};

export async function whatIsMyIp() {
    const response = await fetch(CHECK_IP_INFO.url, {
        method: CHECK_IP_INFO.method,
    });

    switch (CHECK_IP_INFO.dataType) {
        case 'text':
            return response.text();

        case 'json':
            return response.json();

        default:
            return response.text();
    }
}

// console.log(await whatIsMyIp());
