import useFetchData from '../../../hooks/useFetchData';
import { homeAPI } from '../../../hooks/apiUrls';

import ProductCard from '../../../components/ProductCard';
import Loading from '../../../components/Loading';

function FeaturedProducts() {
    const { data, loading, error } = useFetchData(homeAPI);
    const offersProducts = [];

    const handleProducts = (e) => {
        let tablinks = document.getElementsByClassName('products-tab-link');
        for (let i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(' active', '');
        }

        let tabcontent = document.querySelector('#featured .tab-content');
        tabcontent.className = "tab-content " + e.target.id;
        e.target.className += ' active';
    }

    return (
        <section id="featured">
            <div className='container'>
                <div className="section-title">
                    <h2 className="title">Featured</h2>
                    <span className="tab t1">
                        <button className='products-tab-link active' id="all" onClick={handleProducts}>All</button>
                        <button className='products-tab-link' id="nft" onClick={handleProducts}>NFT</button>
                        <button className='products-tab-link' id="offers" onClick={handleProducts}>Offers</button>
                        <button className='products-tab-link' id="latest" onClick={handleProducts}>Latest</button>
                    </span>
                </div>
                <div className='tab-content all'>
                    {
                        loading
                            ? <Loading component />
                            :
                            <>
                                <div className="products" id="all">
                                    {
                                        data?.all_products.map(product => (
                                            <ProductCard
                                                product={product} />
                                        ))
                                    }
                                </div>
                                <div className="products" id="nft">
                                    {
                                        data?.nft_products.map(product => (
                                            <ProductCard
                                                product={product} />
                                        ))
                                    }
                                </div>
                                <div className="products" id="offers">
                                    {
                                        offersProducts.map(product => (
                                            <ProductCard
                                                product={product} />
                                        ))
                                    }
                                </div>
                                <div className="products" id="latest">
                                    {
                                        data?.recent_products.map(product => (
                                            <ProductCard
                                                product={product} />
                                        ))
                                    }
                                </div>
                            </>
                    }
                </div>
            </div>
        </section>
    )
}

export default FeaturedProducts;