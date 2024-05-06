import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = 'https://phygizone.darkube.app/v1';
const apiHeaders = {
    'accept': 'application/json',
    'Authorization': localStorage.getItem('authorization'),
    'Content-Type': 'application/json'
};



/* api: product_homepage_list */
export const HomePageData = () => {
    const [slide, setSlide] = useState({});
    const [banner, setBanner] = useState({});
    const [cats, setCats] = useState([]);
    const [mostSoldProducts, setMostSoldProducts] = useState([]);
    const [highestRatedProducts, setHighestRatedProducts] = useState([]);
    const [recentProducts, setRecentProducts] = useState([]);
    const [brands, setBrands] = useState([]);

    axios.get(baseUrl + '/product/products/?limit=2')
        .then(response => {
            setSlide(response.data.results[0]);
            setBanner(response.data.results[1]);
        })
        .catch(error => {
            throw error;
        });

    axios.get(baseUrl + '/product/categories/?limit=9')
        .then(response => {
            setCats(response.data.results);
        })
        .catch(error => {
            console.error(error);
        });

    axios.get(baseUrl + '/product/homepage/')
        .then(response => {
            setMostSoldProducts(response.data.most_sold_products);
            setHighestRatedProducts(response.data.highest_rated_products);
            setRecentProducts(response.data.recent_products);
            setBrands(response.data.brands);
        })
        .catch(error => {
            console.error(error);
        });

    return {
        slide: slide,
        banner: banner,
        categories: cats,
        mostSoldProducts: mostSoldProducts,
        highestRatedProducts: highestRatedProducts,
        recentProducts: recentProducts,
        brands: brands,
    };
}



/* api: order_cart_add_to_cart */
export const addToCart = (id) => {
    axios.post(baseUrl + '/order/carts/add_to_cart/',
        {
            "product": id,
        },
        {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                alert('Product got added to your cart.');
            }
        }).catch(error => {
            let errorCode = error.response.status;
            switch (errorCode) {
                case (401):
                    alert('You need to be logged in.');
                    break;
                default:
                    alert(error.response.data.message);
            }
        });
}



/* api: order_carts_update_cart_item */
export const removeFromCart = (id) => {
    axios.patch(baseUrl + '/order/carts/update_cart_item/',
        {
            "product": id,
            "is_active": false
        },
        {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                alert('Product got removed from your cart.');
            }
        }).catch(error => {
            let errorCode = error.response.status;
            switch (errorCode) {
                case (401):
                    alert('You need to be logged in.');
                    break;
                case (500):
                    alert('This product is not in your cart.');
                    break;
                default:
                    alert(error.response.status);
            }
        });
}



/* api: product_categories_list */
export const Categories = () => {
    const [count, setCount] = useState(null);
    const [categories, setCategories] = useState([]);

    axios.get(baseUrl + '/product/categories/')
        .then(response => {
            if (response.status === 200) {
                setCount(response.data.count);
                setCategories(response.data.results);
            }
        }).catch(error => {
            alert(error.response.status);
        });

    return {
        count: count,
        categories: categories,
    };
}



/* api: product_categories_read */
export const CategoryProducts = (catId) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDetail, setCategoryDetail] = useState("");
    const [categoryProducts, setCategoryProducts] = useState([]);

    if (catId === null) {
        throw 'Error: Category id is required.';
    }

    axios.get(baseUrl + '/product/categories/' + catId)
        .then(response => {
            if (response.status === 200) {
                setCategoryName(response.data.name);
                setCategoryDetail(response.data.detail);
                setCategoryProducts(response.data.products);
            }
        }).catch(error => {
            alert(error.response.status);
        });

    return {
        categoryId: catId,
        categoryName: categoryName,
        categoryDetail: categoryDetail,
        products: categoryProducts,
    };
}



/* api: product_products_list */
export const Products = () => {
    const [count, setCount] = useState(null);
    const [products, setProducts] = useState([]);

    axios.get(baseUrl + '/product/products/')
        .then(response => {
            if (response.status === 200) {
                setCount(response.data.count);
                setProducts(response.data.results);
            }
        }).catch(error => {
            alert(error.response.status);
        });

    return {
        count: count,
        products: products,
    };
}



/* api: product_products_read */
export const Product = (id) => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState({});
    const [color, setColor] = useState({});
    const [brand, setBrand] = useState({});
    const [material, setMaterial] = useState({});
    const [rate, setRate] = useState(null);
    const [stock, setStock] = useState(null);
    const [hasStock, setHasStock] = useState(false);
    const [image, setImage] = useState("");
    const [isNftRequired, setIsNftRequired] = useState(false);
    const [currentPrice, setCurrentPrice] = useState({});
    const [prices, setPrices] = useState([]);
    const [comments, setCommetns] = useState([]);
    const [nftLink, setNftLink] = useState("");
    const [description, setDescription] = useState("");
    const [album, setAlbum] = useState([]);
    const [specifications, setSpecifications] = useState([]);

    axios.get(baseUrl + '/product/products/1/')
        .then(response => {
            if (response.status === 200) {
                setName(response.data.name);
                setCategory(response.data.category);
                setColor(response.data.color);
                setBrand(response.data.brand);
                setMaterial(response.data.material);
                setRate(response.data.rate);
                setStock(response.data.stock);
                setHasStock(response.data.has_stock);
                setImage(response.data.image);
                setIsNftRequired(response.data.is_nft_required);
                setCurrentPrice(response.data.current_price);
                setPrices(response.data.prices);
                setCommetns(response.data.comments);
                setNftLink(response.data.nft_link);
                setDescription(response.data.description);
                setAlbum(response.data.album);
                setSpecifications(response.data.specifications);
            }
        }).catch(error => {
            alert(error.response.status);
        });

    return {
        name: name,
        category: category,
        color: color,
        brand: brand,
        material: material,
        rate: rate,
        stock: stock,
        hasStock: hasStock,
        image: image,
        isNftRequired: isNftRequired,
        currentPrice: currentPrice,
        prices: prices,
        comments: comments,
        nftLink: nftLink,
        description: description,
        album: album,
        specifications: specifications,
    };
}



/* api: order_carts_read */
export const Cart = () => {
    const [user, setUser] = useState("");
    const [status, setStatus] = useState("");
    const [items, setItems] = useState([]);
    const [price, setPrice] = useState("");

    axios.get(baseUrl + '/order/carts/1/', {
        headers: apiHeaders,
    })
        .then(response => {
            if (response.status === 200) {
                setUser(response.data.user);
                setStatus(response.data.status);
                setItems(response.data.items);
                setPrice(response.data.total_price);
            }
        }).catch(error => {
            alert(error.response.status);
        });

    return {
        user: user,
        status: status,
        items: items,
        totalPrice: price,
    };
}



/* api: user_address_list */
export const Addresses = () => {
    const [count, setCount] = useState(null);
    const [addresses, setAddresses] = useState([]);

    axios.get(baseUrl + '/user/address/', {
        headers: apiHeaders,
    }).then(response => {
        if (response.status === 200) {
            setCount(response.data.count);
            setAddresses(response.data.results);
        }
    });

    return {
        count: count,
        items: addresses,
    }
}



/* api: orser_payments_list */
export const Payments = () => {
    const [count, setCount] = useState(null);
    const [methods, setMethods] = useState([]);

    axios.get(baseUrl + '/order/payments/', {
        headers: apiHeaders,
    }).then(response => {
        if (response.status === 200) {
            setCount(response.data.count);
            setMethods(response.data.results);
        }
    }).catch(error => {
        alert(error.response.status);
    });

    return {
        count: count,
        methods: methods
    };
}



/* api: order_payments_save_payment */
export const Pay = (methodCode) => {
    axios.post(baseUrl + '/order/payments/save_payment/',
        {
            "payment_method_code": methodCode,
        },
        {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                window.location.replace(response.data.url)
            }
        }).catch(error => {
            let errorCode = error.response.status;
            switch (errorCode) {
                case (401):
                    alert('You need to be logged in.');
                    break;
                case (500):
                    alert('Server error: Something went wrong.');
                    break;
                default:
                    alert(error.response.status);
            }
        });
}



/* api: user_orders_list */
export const Orders = () => {
    const [count, setCount] = useState(null);
    const [items, setItems] = useState([]);

    axios.get(baseUrl + '/user/orders/', {
        headers: apiHeaders,
    }).then(response => {
        if (response.status === 200) {
            setCount(response.data.count);
            setItems(response.data.results);
        }
    }).catch(error => {
        alert(error.response.status);
    });

    return {
        count: count,
        items: items,
    };
}


