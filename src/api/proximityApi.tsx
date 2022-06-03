import axios from 'axios';

const baseURL = 'https://serveless.proximateapps-services.com.mx/proximatetools/dev/webadmin/testproximate';

const proximityApi = axios.create({ baseURL });

export default proximityApi;