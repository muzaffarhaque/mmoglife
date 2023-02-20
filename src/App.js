import logo from "./Images/Frame 760.png"
import "./App.scss";
import Nevbar from "./Components/Nevbar";
import bgimg from "./Images/Final Fantasy.png";
import img2 from "./Images/fortente.png";
import img3 from "./Images/world of warcraft.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faL, faLink} from "@fortawesome/free-solid-svg-icons";
import visa from "./Images/yourgiftcardshop 1.png"

let allgame = [
    {
        name: "World of Warcraft",
        image: "all1"
    }, {
        name: "Rocket LEague",
        image: "all2"
    }, {
        name: "Revelation",
        image: "all3"
    }, {
        name: "AION",
        image: "all4"
    }
];

function App() {
    return (
        <div className="main-big-container-all-sec">
            <Nevbar/>

          <div className="combint-alll">

            <section className="main-container">
                <div className="side-box-data">
                    <h2>MMOGLIFE</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Aliquam ac sed purus lectus luctus. Sit
                        nec dictum massa hendrerit tortor venenatis aliquet diam faucibus. Duis.
                    </p>

                    <button className="button-cross">
                        <h3>BROWSE GAMES</h3>
                    </button>
                    <button className="button-cross">
                        <h3>About Us</h3>
                    </button>
                </div>
            </section>
            <section className="addd-horizantal-scrolll">
                <div className="second-header">
                    <h2>Whats New?</h2>
                    <button className="button-cross">
                        <h3>Explore more games</h3>
                    </button>
                </div>
                <div className="carde-scrolling-frame">
                    <div className="card">
                        <div className="shasdo">
                            <button className="button-cross">
                                <h3>
                                    Find out more
                                    <FontAwesomeIcon icon={faLink}/>
                                </h3>
                            </button>
                        </div>
                        <img src={bgimg} alt=""/>
                        <h4>Fortnite</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Eget tincidunt non odio sit. Faucibus
                            aliquam bibendum fermentum at mauris turpis potenti sollicitudin viverra...{" "}
                        </p>
                    </div>
                    <div className="card">
                        <div className="shasdo">
                            <button className="button-cross">
                                <h3>
                                    Find out more
                                    <FontAwesomeIcon icon={faLink}/>
                                </h3>
                            </button>
                        </div>
                        <img src={img2} alt=""/>
                        <h4>Final fantasy xiv online</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Eget tincidunt non odio sit. Faucibus
                            aliquam bibendum fermentum at mauris turpis potenti sollicitudin viverra...{" "}
                        </p>
                    </div>
                    <div className="card">
                        <div className="shasdo">
                            <button className="button-cross">
                                <h3>
                                    Find out more
                                    <FontAwesomeIcon icon={faLink}/>
                                </h3>
                            </button>
                        </div>
                        <img src={img3} alt=""/>
                        <h4>World of warcraft</h4>
                        <p>
                            Lorem ipsum dolor sit amet consectetur. Eget tincidunt non odio sit. Faucibus
                            aliquam bibendum fermentum at mauris turpis potenti sollicitudin viverra...{" "}
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------------------Thids section------------------ */}

            <section className="About-us-sec">
                <div className="side-box-data aboutdata">
                    <h2>About us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Eget tincidunt non odio sit. Faucibus
                        aliquam bibendum fermentum at mauris turpis potenti sollicitudin viverra. Sapien
                        ac viverra pellentesque odio neque vulputate. Sed mi in ornare tempor auctor
                        accumsan eu id. Imperdiet tortor cursus cras eget massa varius. Neque non felis
                        velit quis nunc.
                    </p>

                    <button className="button-cross">
                        <h3>Find out more</h3>
                    </button>
                </div>
            </section>

            {/* ====================Foutth secton =================== */}
            <section className="addd-horizantal-scrolll addpaging">
                <div className="second-header">
                    <h2>Best seller</h2>
                    <button className="button-cross">
                        <h3>
                            View All Games
                            <FontAwesomeIcon icon={faLink}/>
                        </h3>
                    </button>
                </div>
                <div className="carde-scrolling-frame">
                    {allgame.map((item, i) => {
                        return (
                            <div className="card allgames">
                                <div className="shasdo">
                                    <button className="button-cross">
                                        <h3>
                                            Find out more
                                            <FontAwesomeIcon icon={faLink}/>
                                        </h3>
                                    </button>
                                </div>
                                <img src={require(`./Images/${item.image}.png`)} alt=""/>
                                <h4>{item.name}</h4>
                            </div>
                        );
                    })}
                </div>
            </section>
            {/* ======================= Fifth section ============================== */}
            <section className="main-container addcareimgaetobag">
                <div className="side-box-data whyus">
                    <h2>Why us</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic iste quod fugiat
                        amet? Provident, labore. Porro asperiores accusamus autem cum, fugit quod
                        assumenda, consequatur dicta expedita consectetur minima magnam maiores.
                    </p>

                    <button className="button-cross">
                        <h3>Find Out More</h3>
                    </button>
                </div>
            </section>
            {/* ============== Footer ===================== */}

            <footer className="footer">
                <div className="colum">
                    <h4>Contact
                    </h4>
                    <p>
                        Company name
                        <br/>
                        123 place,
                        <br/>
                        longdale close, cITY, post code,
                        <br/>
                        country
                    </p>
                </div>
                <div className="colum">
                    <h4>Our Games
                    </h4>
                    <div className="splites">
                        <div className="first-part">
                            <p>Aion DC Universe Elder Scrolls Fallout 76 Fortnite</p>
                        </div>
                        <div className="second-part">
                            <p>Guild Wars 2 Lord of the rings online Rocket league Warframe World of Warcraft</p>
                        </div>
                    </div>
                </div>
                <div className="colum">
                    <h4>Support</h4>
                    <p>
                        Terms & Conditions Privacy policy cookie policy
                    </p>
                </div>
                <div className="colum">
                <img className="logo-header" src={logo} alt="logo" />
                <p>© 2021 yoursecretloot.com. All Rights Reserved. This site is not affiliated or owned by the listed gaming platform owners.</p>
                <img src={visa} alt="visa" className="viscardimgae"/>
                </div>
            </footer>

            </div>

        </div>
    );
}

export default App;
