import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl = 'https://phygizone.darkube.app/v1';
const apiHeaders = {
    'accept': 'application/json',
    'Authorization': localStorage.getItem('authorization'),
    'Content-Type': 'application/json'
};

/* Get User ID */
export const GetUserId = () => {
    const [userId, setUserId] = useState(0);

    useEffect(() => {
        axios.get(baseUrl + '/user/profile/info', {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                setUserId(response.data.id);
            }
        }).catch(() => { });
    }, []);

    return userId;
};

/* Get Dashboard Items */
export const GetDashboard = () => {
    const [name, setName] = useState(null);
    const [totalCount, setTotalCount] = useState(null);
    const [statusCount, setStatusCount] = useState([]);
    const [avatar, setAvatar] = useState(null);

    useEffect(() => {
        axios.get(baseUrl + '/user/profile/dashboard/', {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                setName(response.data.user);
                setTotalCount(response.data.total_orders.total_order_count);
                setStatusCount(response.data.total_orders.order_counts_by_status);
            }
        }).catch(() => { });

        axios.get(baseUrl + '/user/profile/info/', {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                setAvatar(response.data.avatar);
            }
        }).catch(() => { });
    }, []);

    return {
        name: name,
        avatar: avatar,
        total: totalCount,
        statusCount: statusCount,
    };
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

    useEffect(() => {
        axios.get(baseUrl + '/product/products/?limit=2')
            .then(response => {
                setSlide(response.data.results[0]);
                setBanner(response.data.results[1]);
                setSlide({ id: 'slide' });
                setBanner({ id: 'banner' });
            })
            .catch(() => { });

        axios.get(baseUrl + '/product/categories/?limit=9')
            .then(response => {
                setCats(response.data.results);
            })
            .catch(() => { });

        axios.get(baseUrl + '/product/homepage/')
            .then(response => {
                setMostSoldProducts(response.data.most_sold_products);
                setHighestRatedProducts(response.data.highest_rated_products);
                setRecentProducts(response.data.recent_products);
                setBrands(response.data.brands);
            })
            .catch(() => { });
    }, []);

    return {
        slide: slide,
        banner: banner,
        categories: cats,
        mostSoldProducts: mostSoldProducts,
        highestRatedProducts: highestRatedProducts,
        recentProducts: recentProducts,
        brands: brands,
    };
};

/* api: product_categories_list */
export const Categories = () => {
    const [count, setCount] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + '/product/categories/')
            .then(response => {
                if (response.status === 200) {
                    setCount(response.data.count);
                    setCategories(response.data.results);
                }
            })
            .catch(error => {
                alert(error.response.status);
            });
    }, []);

    return {
        count: count,
        categories: categories,
    };
};

/* api: product_categories_read */
export const CategoryProducts = (catId) => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryDetail, setCategoryDetail] = useState("");
    const [categoryProducts, setCategoryProducts] = useState([]);

    useEffect(() => {
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
            })
            .catch(error => {
                alert(error.response.status);
            });
    }, [catId]);

    return {
        categoryId: catId,
        categoryName: categoryName,
        categoryDetail: categoryDetail,
        products: categoryProducts,
    };
};

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
    const [comments, setComments] = useState([]);
    const [nftLink, setNftLink] = useState("");
    const [description, setDescription] = useState("");
    const [album, setAlbum] = useState([]);
    const [specifications, setSpecifications] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + '/product/products/' + id + '/')
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
                    setComments(response.data.comments);
                    setNftLink(response.data.nft_link);
                    setDescription(response.data.description);
                    setAlbum(response.data.album);
                    setSpecifications(response.data.specifications);
                }
            })
            .catch(error => {
                alert(error.response.status);
            });
    }, [id]);

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
};


export const Products = () => {
    const [count, setCount] = useState(null);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(baseUrl + "/product/products/");
                if (response.status === 200) {
                    setCount(response.data.count);
                    setProducts(response.data.results);
                }
            } catch (err) {
                console.error(err);
            }
        };
        fetchProducts();
    }, []); // Empty array ensures it only runs once

    return { count, products };
};

/* api: order_carts_read */
export const Cart = () => {
    const [user, setUser] = useState("");
    const [status, setStatus] = useState("");
    const [items, setItems] = useState([]);
    const [price, setPrice] = useState("");

    useEffect(() => {
        axios.get(baseUrl + '/order/carts/', {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                axios.get(baseUrl + '/order/carts/' + response.data.results[0].id, {
                    headers: apiHeaders,
                }).then(response => {
                    setUser(response.data.user);
                    setStatus(response.data.status);
                    setItems(response.data.items);
                    setPrice(response.data.total_price);
                }).catch(error => {
                    alert(error.message);
                });
            }
        }).catch(error => {
            if (error.response.status === 404) {
                alert('Your cart is empty.');
                return window.location.replace('/');
            }
            alert(error.message);
        });
    }, []);

    return {
        user: user,
        status: status,
        items: items,
        totalPrice: price,
    };
};

/* api: user_address_list */
export const Addresses = () => {
    const [count, setCount] = useState(null);
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + '/user/address/', {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                setCount(response.data.count);
                setAddresses(response.data.results);
            }
        });
    }, []);

    return {
        count: count,
        items: addresses,
    };
};

/* api: user_address_read */
export const GetAddress = (id) => {
    const [address, setAddress] = useState({});

    useEffect(() => {
        axios.get(baseUrl + '/user/address/' + id, {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                setAddress(response.data);
            }
        }).catch(error => {
            alert(error.response.status);
        });
    }, [id]);

    return address;
};

/* api: user_orders_list */
export const GetOrders = () => {
    const [count, setCount] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
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
    }, []);

    return {
        count: count,
        items: items,
    };
};

/* api: user_orders_read */
export const OrderDetails = (id) => {
    const [status, setStatus] = useState(null);
    const [number, setNumber] = useState(null);
    const [tax, settax] = useState(null);
    const [shippingPrice, setShippingPrice] = useState(null);
    const [discount, setDiscount] = useState(null);
    const [address, setAddress] = useState(null);
    const [totalPrice, setTotalPrice] = useState(null);
    const [items, setItems] = useState([]);
    const [insertData, setInsertDate] = useState(null);
    const [updateDate, setUpdateDate] = useState(null);

    useEffect(() => {
        axios.get(baseUrl + '/user/orders/' + id, {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                const data = response.data;
                setStatus(data.order_status);
                setNumber(data.order_number);
                settax(data.tax);
                setShippingPrice(data.shipping_price);
                setDiscount(data.discount);
                setAddress(data.address);
                setTotalPrice(data.total_price);
                setItems(data.items);
                setInsertDate(data.insert_dt);
                setUpdateDate(data.update_dt);
            }
        }).catch(() => { });
    }, [id]);

    return {
        status: status,
        number: number,
        tax: tax,
        shippingPrice: shippingPrice,
        discount: discount,
        address: address,
        totalPrice: totalPrice,
        items: items,
        insertData: insertData,
        updateDate: updateDate
    };
};

/* api: user_faqs_list */
export const FAQs = () => {
    const [count, setCount] = useState(null);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        axios.get(baseUrl + '/user/faqs/')
            .then(response => {
                if (response.status === 200) {
                    setCount(response.data.count);
                    setQuestions(response.data.results);
                }
            }).catch(error => {
                alert(error.response.status);
            });
    }, []);

    return {
        count: count,
        items: questions,
    };
};

/* api: order_payments_list */
export const Payments = () => {
    const [count, setCount] = useState(null);
    const [methods, setMethods] = useState([]);

    useEffect(() => {
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
    }, []);

    return {
        count: count,
        methods: methods
    };
};

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
};

/* api: order_carts_update_cart_item */
export const removeFromCart = (id) => {
    axios.patch(baseUrl + '/order/carts/update_cart_item/',
        {
            "product": id,
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
};

/* api: user_address_create */
export const SetAddress = (address) => {
    axios.post(baseUrl + '/user/address/', address,
        {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 201) {
                window.location.replace('/dashboard/address/');
            }
        }).catch(error => {
            alert(error.message);
        });
};

/* api: user_address_update */
export const UpdateAddress = (id, address) => {
    axios.patch(baseUrl + '/user/address/' + id, address,
        {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 200) {
                window.location.replace('/dashboard/address/');
            }
        }).catch(error => {
            alert(error.message);
        });
};

/* api: user_address_delete */
export const DeleteAddress = (id) => {
    axios.delete(baseUrl + '/user/address/' + id,
        {
            headers: apiHeaders,
        }).then(response => {
            if (response.status === 204) {
                window.location.replace('/dashboard/address/');
            }
        }).catch(error => {
            alert(error.message);
        });
};

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
                window.location.replace('/dashboard/orders/')
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
};
