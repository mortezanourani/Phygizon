import './index.css';

function Playground() {
    return (
        <div id="playground">
            <h3 className="page-title">Score</h3>
            <div className="score-frame">
                <div id="login">
                    <img src="/images/icons/logo.rayzon.svg" alt="" />
                    <span>
                        <h3>Log in Rayzon</h3>
                        <p>Go to Rayzon.com and log in that you can earn 10 raypoint. You can get discunt by earned
                            raypoint. Thats Great
                            opportunity!!</p>
                    </span>
                </div>
                <div id="score"></div>
                <div id="daily">
                    <img src="/images/icons/logo.rayzon.svg" alt="" />
                    <h3>Daily Raypoint</h3>
                    <p>Go to Ranking.com and log in that you can earn 20 raypoint. You can get discunt by earned
                        raypoint. Thats Great
                        opportunity!!</p>
                </div>
                <div id="giftcard">
                    <img src="/images/icons/logo.rayzon.svg" alt="" />
                    <h3>Buy Gift card</h3>
                    <p>Go to MGC pro.com and log in that you can earn 60 raypoint. You can get discunt by earned
                        raypoint. Thats Great
                        opportunity!!</p>
                </div>
            </div>
            <h3 className="page-title">Discount</h3>
            <div className="discount-frame">
                <div className="discount">
                    <div>
                        <h2>Rayzon</h2>
                        <span className="badge red">30%</span>
                    </div>
                    <h4>Valid for up to 5 months</h4>
                    <p>Buy from Rayzon with a 30% discount</p>
                    <a href="#">
                        <button className="btn sm cta">
                            Use Discount
                        </button>
                    </a>
                </div>
                <div className="discount">
                    <div>
                        <h2>Rayzon</h2>
                        <span className="badge red">30%</span>
                    </div>
                    <h4>Valid for up to 5 months</h4>
                    <p>Buy from Rayzon with a 30% discount</p>
                    <a href="#">
                        <button className="btn sm cta">
                            Use Discount
                        </button>
                    </a>
                </div>
                <div className="discount">
                    <div>
                        <h2>Rayzon</h2>
                        <span className="badge red">30%</span>
                    </div>
                    <h4>Valid for up to 5 months</h4>
                    <p>Buy from Rayzon with a 30% discount</p>
                    <a href="#">
                        <button className="btn sm cta">
                            Use Discount
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Playground;