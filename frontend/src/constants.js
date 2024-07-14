// export const BASE_URL = process.env.NODE_ENV === 'development'?'http://localhost:5001' : ''; // export the BASE_URL variable, either it is development or production
// no need to set url to 5001, cuz we've had it by proxy in package.json
export const BASE_URL = '';
export const PRODUCTS_URL = '/api/products'; // export the PRODUCT_URL variable
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal'; 