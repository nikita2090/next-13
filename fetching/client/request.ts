import axios, { AxiosResponse, RawAxiosRequestConfig } from 'axios';

export const instanceApi = axios.create({
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    },
});

export const request = <T>(config: RawAxiosRequestConfig): Promise<T> => {
    return instanceApi(config).then(
        (response: AxiosResponse<T>) => response.data
    );
};
