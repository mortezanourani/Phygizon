export const headers = {
    "accept": "application/json",
    "Authorization": localStorage.getItem("Authorization"),
    "Content-Type": "application/json"
};

export const baseUrl = "https://api-phg-dev.rz-game.com/v1";

export const homeAPI = baseUrl + "/product/homepage/";
export const categoriesAPI = baseUrl + "/product/categories/";
export const productsAPI = baseUrl + "/product/products/";
export const addressAPI = baseUrl + "/user/address/";
export const faqAPI = baseUrl + "/user/faqs/";

export const userRegisterAPI = baseUrl + "/user/register/user/";
export const userRegisterSendCodeAPI = baseUrl + "/user/register/send_code/";
export const userRegisterCheckCodeAPI = baseUrl + "/user/register/check_code/";
export const userRegisterSetPassword = baseUrl + "/user/register/set_password/";
export const loginCheckPasswordAPI = baseUrl + "/user/login/check_password/";

export const getWishlistAPI = baseUrl + "/product/wishlist/get_wishlist/";
export const addToWishlistAPI = baseUrl + "/product/wishlist/add_to_wishlist/";
export const removeFromWishlistAPI = baseUrl + "/product/wishlist/remove_from_wishlist/";

export const userProfileInfoAPI = baseUrl + "/user/profile/info/";
export const userOrderCountsAPI = baseUrl + "/user/profile/dashboard/";
export const userOrdersAPI = baseUrl + "/user/orders/";

export const orderPaymentsAPI = baseUrl + "/order/payments/";
export const saveOrderPaymentAPI = baseUrl + "/order/payments/save_payment/";

export const getCartAPI = baseUrl + "/order/carts/get_cart/";
export const addToCartAPI = baseUrl + "/order/carts/add_to_cart/";
export const removeFromCartAPI = baseUrl + "/order/carts/update_cart_item/";

export const changeEmailAPI = baseUrl + "/user/profile/change_email/";
export const changePhoneAPI = baseUrl + "/user/profile/change_phone_number/";

export const sellerSignupAPI = baseUrl + "/user/profile/seller_sign_up/";
