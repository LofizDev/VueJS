import axios from 'axios';
import { sha256 } from 'js-sha256';

const key = import.meta.env.VITE_API_KEY;
const appId = import.meta.env.VITE_API_APP_ID;
const domain = import.meta.env.VITE_API_APP_DOMAIN;
const baseUrl = import.meta.env.VITE_API_URL;
const services = {
    async getToken() {
        var loginInfo = {
            AppID: appId,
            Domain: domain,
            LoginTime: new Date().toISOString()
        }; console.log(loginInfo)
        var data = {
            ...loginInfo,
            SignatureInfo: sha256.hmac(key, JSON.stringify(loginInfo))
        };
        const result = await axios.post(`https://graphapi.cukcuk.vn/api/account/login`, data);
        return result.data || null;
    },
    async getAll(url, query) {
        const token = await this.getToken();
        const headerConfig = {
            headers: {
                Authorization: 'Bearer ' + token.Data.AccessToken,
                CompanyCode: token.Data.CompanyCode,
            }
        };
        const result = await axios.post(baseUrl + url, query, headerConfig);
        return result;
    },
    async getDetail(url) {
        const token = await this.getToken();
        const headerConfig = {
            headers: {
                Authorization: 'Bearer ' + token.Data.AccessToken,
                CompanyCode: token.Data.CompanyCode,
            }
        };
        const result = await axios.get(baseUrl + url, headerConfig);
        return result;
    },
    async getAllGet(url) {
        const token = await this.getToken();
        const headerConfig = {
            headers: {
                Authorization: 'Bearer ' + token.Data.AccessToken,
                CompanyCode: token.Data.CompanyCode,
            }
        };
        const result = await axios.get(baseUrl + url, headerConfig);
        return result;
    },
}
export default services;
