import { Axios } from "axios";


export function newPhotoClient(baseURL: string): Axios {
    return new Axios({
        baseURL: baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
        transformResponse: [function (data) {
            if (typeof data === 'string') {
                try {
                    return JSON.parse(data);
                } catch (e) {
                    return data;
                }
            }
            return data;
        }]
    });
}

