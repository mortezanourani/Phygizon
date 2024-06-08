export const apiHeaders = {
    "accept": "application/json",
    "Authorization": localStorage.getItem("Authorization"),
    "Content-Type": "application/json"
};

export const baseUrl = "https://phygizone.darkube.app/v1";
export const homeAPI = baseUrl + "/product/homepage/";
export const categoriesAPI = baseUrl + "/product/categories/";
export const addressAPI = baseUrl + "/user/address/";
export const faqAPI = baseUrl + "/user/faqs/";

export const orderCountsAPI = baseUrl + "/user/profile/dashboard/";

export const getCartAPI = baseUrl + "/order/carts/get_cart/";
export const addToCartAPI = baseUrl + "/order/carts/add_to_cart/";
export const removeFromCartAPI = baseUrl + "/order/carts/update_cart_item/";