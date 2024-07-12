export const BASE_URL = process.env.NODE_ENV === 'development'?'http://localhost:5001' : ''; // export the BASE_URL variable, either it is development or production
export const PRODUCT_URL = '/api/products'; // export the PRODUCT_URL variable
export const USERS_URL = '/api/users';
export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal'; 