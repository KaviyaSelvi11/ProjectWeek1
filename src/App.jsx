// Filename - App.js

import React from "react";
import "./App.css";


function App() {
    return (
        <div>
            <div class="centerNav">
                    <h1 class="centerNav">SHOPIE</h1>
                </div>
<hr></hr>

            <nav class="navbar background">
                <ul class="nav-list">
                    <div class="logo">
                        <img src=
"https://i.pinimg.com/originals/87/2c/0b/872c0ba4f9cba9d92796fb8861d7810b.jpg"
                        />
                    </div>
                    <li>
                        <a href="#Men">Men</a>
                    </li>
                    <li>
                        <a href="#Women">Women</a>
                    </li>
                    <li>
                        <a href="#Kids">Kids</a>
                    </li>
                    <li>
                        <a href="#Sales">Hot Sales</a>
                    </li>
                </ul>
                

                <div class="rightNav">
                    <input
                        type="text"
                        name="search"
                        id="search"
                    />
                    <button class="btn btn-sm">
                        Search
                    </button>
                   <ul class="nav-list"> <li> <div class="refer">
                        <img src=
"https://i.pinimg.com/originals/73/17/a5/7317a548844e0d0cccd211002e0abc45.jpg"
                        />
                    </div></li>
                    <li> <div class="refer">
                        <img src=
"https://cdn4.iconfinder.com/data/icons/ecommerce-webdesign-and-business-colorful-pastel-c/283/ec_62-512.png"
                        />
                    </div></li>
                    <li> <div class="refer">
                        <img src=
"https://i.pinimg.com/736x/c2/af/6e/c2af6e4f4ef43d2afda4b24894d3f3b8.jpg"
                        />
                    </div></li>
                    </ul> 
                   
                </div>
            </nav>
<hr></hr>
            <section class="section">
                <div class="box-main">
                    <div class="firstHalf" id="Men">
                        <h1 class="text-big">
                            MEN
                        </h1>
                        <p class="text-small">
                        Biggest Deals On Top Brands
                        </p>
                        <br></br>
                        <div class="banner">
                        <img src="https://t4.ftcdn.net/jpg/04/15/97/33/360_F_415973312_5yg3MrkRdi2SMHyVKbB4h7GgE5HrgUlb.jpg"/>
                        </div>
                        <button  class="button">SHOP NOW</button>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main" >
                    <div class="firstHalf" id="Women" >
                        <h1 class="text-big" id="program">
                            WOMEN
                        </h1>
                        <p class="text-small">
                        Biggest Deals On Top Brands
                        </p>
                        <br></br>
                        <div class="banner" >
                        <img src="https://t3.ftcdn.net/jpg/06/08/19/10/360_F_608191088_ATXwUHQnOIe67Dnt7JDkzKWHDpgCfuCA.jpg"/>
                        </div>
                        <button  class="button">SHOP NOW</button>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf" id="Kids">
                        <h1 class="text-big" id="program">
                            KIDS
                        </h1>
                        <p class="text-small">
                        Biggest Deals On Top Brands
                        </p>
                        <br></br>
                        <div class="banner">
                        <img src="https://t3.ftcdn.net/jpg/04/41/75/86/360_F_441758662_oWPLjMv8p0P98DdNxk5s3ouWPjl3wspu.webp"/>
                        </div>
                        <button class="button">SHOP NOW</button>
                    </div>
                </div>
            </section>
            <section class="section">
                <div class="box-main">
                    <div class="secondHalf" id="Sales">
                        <h1 class="text-big" id="program">
                            HOT SALES
                        </h1>
                        <p class="text-small">
                            SALE IS ON!
                        </p>
                        <br></br>
                        <div class="banner">
                        <img src="https://st5.depositphotos.com/10614052/62667/i/450/depositphotos_626678880-stock-photo-banner-winter-sale-warm-clothes.jpg"/>
                        </div>
                        <button class="button">SHOP NOW</button>
                    </div>
                </div>
            </section>
            <footer className="footer">
                <p className="text-footer">
                    Copyright ©-All rights are reserved
                </p>
            </footer>
        </div>
    );
}

export default App;