/**
 * @license
 */
export const environment = {
    production: true,
    //GOOGLE MAP
    googleApiKey: window["env"]["APP_MAP_API_KEY"] || '',
    //MARKETPLACE | BTB | STANDARD
    mode: 'STANDARD',
    //API URL
    apiUrl: window["env"]["APP_BASE_URL"] || 'http://127.0.0.1:8080/api/v1',
    shippingApi: window["env"]["APP_SHIPPING_URL"] || 'http://127.0.0.1:9090/api',
    client: {
        language: {
            default: window["env"]["APP_DEFAULT_LANGUAGE"] || 'fr',
            array: [
                'fr',
                'en'
            ],
        },
    }
};
