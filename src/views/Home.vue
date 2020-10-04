<template>
    <div>
        <Header
            :main-page="true"
        />
        <!--<div class="header-area" id="headerArea">
            <div class="container h-100 d-flex align-items-center justify-content-between">
                &lt;!&ndash; Logo Wrapper&ndash;&gt;
                <div class="logo-wrapper">
                    <router-link to="/home">
                        <img src="./../assets/logow.svg" alt="">
                    </router-link>
                </div>
                &lt;!&ndash; Search Form&ndash;&gt;
                <div class="top-search-form">
                    <form action="#" method="post">
                        <input class="form-control" type="search" placeholder="Начните поиск">
                        <button type="submit"><i class="fa fa-search"></i></button>
                    </form>
                </div>
                &lt;!&ndash; Navbar Toggler&ndash;&gt;
                <div class="suha-navbar-toggler d-flex flex-wrap" id="suhaNavbarToggler" ref="suhaNavbarToggler"
                     @click="$store.dispatch('toggleSideMenu')"><span></span><span></span><span></span></div>
            </div>
        </div>-->
        <!-- Sidenav Black Overlay-->
        <SideMenu/>
        <div class="page-content-wrapper">
            <!-- Hero Slides-->
            <HeroSlides/>
            <!-- Product Catagories-->
            <div class="product-catagories-wrapper pt-3">
                <div class="container">
                    <div class="section-heading">
                        <h6 class="ml-1">Категории обращений</h6>
                    </div>
                    <div class="product-catagory-wrap">
                        <div class="row">
                            <!-- Single Catagory Card-->
                            <div class="col-4">
                                <div class="card mb-3 catagory-card">
                                    <div class="card-body">
                                        <router-link to="/new-ticket">
                                            <i class="lni lni-users"></i>
                                            <span>Охрана</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <!-- Single Catagory Card-->
                            <div class="col-4">
                                <div class="card mb-3 catagory-card">
                                    <div class="card-body">
                                        <router-link to="/new-ticket">
                                            <i class="lni lni-question-circle"></i>
                                            <span>Паркинг</span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <!-- Single Catagory Card-->
                            <div class="col-4">
                                <div class="card mb-3 catagory-card">
                                    <div class="card-body">
                                        <router-link to="/new-ticket">
                                            <i class="lni lni-arrows-vertical"></i>
                                            <span>Проблемы с лифтом</span></router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card mb-3 catagory-card">
                                    <div class="card-body">
                                        <router-link to="/new-ticket">
                                            <i class="lni lni-warning"></i>
                                            <span>Уборка</span></router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card mb-3 catagory-card">
                                    <div class="card-body">
                                        <router-link to="/new-ticket">
                                            <i class="lni lni-hand"></i>
                                            <span>Бухгалтерия</span></router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="card mb-3 catagory-card">
                                    <div class="card-body">
                                        <router-link to="/new-ticket">
                                            <i class="lni lni-laptop"></i>
                                            <span>ПК-помощь</span></router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Flash Sale Slide-->
            <div class="flash-sale-wrapper pb-3">
                <div class="container">
                    <div class="section-heading d-flex align-items-center justify-content-between">
                        <h6 class="ml-1">
                            <!--Flash Sale-->
                        </h6>
                        <router-link class="btn btn-primary btn-sm" to="/services">
                            Услуги
                        </router-link>
                    </div>
                    <!-- Flash Sale Slide-->
                    <!--<div class="flash-sale-slide owl-carousel">
                        &lt;!&ndash; Single Flash Sale Card&ndash;&gt;
                        <div class="card flash-sale-card">
                            <div class="card-body"><a href="single-product.html"><img src="img/product/1.png"
                                                                                      alt=""><span
                                    class="product-title">Black Table Lamp</span>
                                <p class="sale-price">$7.99<span class="real-price">$15</span></p><span
                                        class="progress-title">33% Sold Out</span>
                                &lt;!&ndash; Progress Bar&ndash;&gt;
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                        </div>
                        &lt;!&ndash; Single Flash Sale Card&ndash;&gt;
                        <div class="card flash-sale-card">
                            <div class="card-body"><a href="single-product.html"><img src="img/product/2.png"
                                                                                      alt=""><span
                                    class="product-title">Modern Sofa</span>
                                <p class="sale-price">$14<span class="real-price">$21</span></p><span
                                        class="progress-title">57% Sold Out</span>
                                &lt;!&ndash; Progress Bar&ndash;&gt;
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 57%" aria-valuenow="57"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                        </div>
                        &lt;!&ndash; Single Flash Sale Card&ndash;&gt;
                        <div class="card flash-sale-card">
                            <div class="card-body"><a href="single-product.html"><img src="img/product/3.png"
                                                                                      alt=""><span
                                    class="product-title">Classic Garden Chair</span>
                                <p class="sale-price">$36<span class="real-price">$49</span></p><span
                                        class="progress-title">100% Sold Out</span>
                                &lt;!&ndash; Progress Bar&ndash;&gt;
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%"
                                         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                        </div>
                        &lt;!&ndash; Single Flash Sale Card&ndash;&gt;
                        <div class="card flash-sale-card">
                            <div class="card-body"><a href="single-product.html"><img src="img/product/1.png"
                                                                                      alt=""><span
                                    class="product-title">Black Table Lamp</span>
                                <p class="sale-price">$7.99<span class="real-price">$15</span></p><span
                                        class="progress-title">33% Sold Out</span>
                                &lt;!&ndash; Progress Bar&ndash;&gt;
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 33%" aria-valuenow="33"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                        </div>
                        &lt;!&ndash; Single Flash Sale Card&ndash;&gt;
                        <div class="card flash-sale-card">
                            <div class="card-body"><a href="single-product.html"><img src="img/product/2.png"
                                                                                      alt=""><span
                                    class="product-title">Modern Sofa</span>
                                <p class="sale-price">$14<span class="real-price">$21</span></p><span
                                        class="progress-title">57% Sold Out</span>
                                &lt;!&ndash; Progress Bar&ndash;&gt;
                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 57%" aria-valuenow="57"
                                         aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                        </div>
                        &lt;!&ndash; Single Flash Sale Card&ndash;&gt;
                        <div class="card flash-sale-card">
                            <div class="card-body"><a href="single-product.html"><img src="img/product/3.png"
                                                                                      alt=""><span
                                    class="product-title">Classic Garden Chair</span>
                                <p class="sale-price">$36<span class="real-price">$49</span></p><span
                                        class="progress-title">100% Sold Out</span>
                                &lt;!&ndash; Progress Bar&ndash;&gt;
                                <div class="progress">
                                    <div class="progress-bar bg-danger" role="progressbar" style="width: 100%"
                                         aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                        </div>
                    </div>-->
                </div>
            </div>
            <!-- Top Products-->
            <!-- <div class="top-products-area clearfix">
                 <div class="container">
                     <div class="section-heading d-flex align-items-center justify-content-between">
                         <h6 class="ml-1">Top Products</h6><a class="btn btn-danger btn-sm" href="shop-grid.html">View
                         All</a>
                     </div>
                     <div class="row">
                         &lt;!&ndash; Single Top Product Card&ndash;&gt;
                         <div class="col-6 col-sm-4 col-lg-3">
                             <div class="card top-product-card mb-3">
                                 <div class="card-body"><span class="badge badge-success">Sale</span><a
                                         class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                         class="product-thumbnail d-block" href="single-product.html"><img class="mb-2"
                                                                                                           src="img/product/11.png"
                                                                                                           alt=""></a><a
                                         class="product-title d-block" href="single-product.html">Beach Cap</a>
                                     <p class="sale-price">$13<span>$42</span></p>
                                     <div class="product-rating"><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                                     <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                             class="lni lni-plus"></i></a>
                                 </div>
                             </div>
                         </div>
                         &lt;!&ndash; Single Top Product Card&ndash;&gt;
                         <div class="col-6 col-sm-4 col-lg-3">
                             <div class="card top-product-card mb-3">
                                 <div class="card-body"><span class="badge badge-primary">New</span><a
                                         class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                         class="product-thumbnail d-block" href="single-product.html"><img class="mb-2"
                                                                                                           src="img/product/5.png"
                                                                                                           alt=""></a><a
                                         class="product-title d-block" href="single-product.html">Wooden Sofa</a>
                                     <p class="sale-price">$74<span>$99</span></p>
                                     <div class="product-rating"><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                                     <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                             class="lni lni-plus"></i></a>
                                 </div>
                             </div>
                         </div>
                         &lt;!&ndash; Single Top Product Card&ndash;&gt;
                         <div class="col-6 col-sm-4 col-lg-3">
                             <div class="card top-product-card mb-3">
                                 <div class="card-body"><span class="badge badge-success">Sale</span><a
                                         class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                         class="product-thumbnail d-block" href="single-product.html"><img class="mb-2"
                                                                                                           src="img/product/6.png"
                                                                                                           alt=""></a><a
                                         class="product-title d-block" href="single-product.html">Roof Lamp</a>
                                     <p class="sale-price">$99<span>$113</span></p>
                                     <div class="product-rating"><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                                     <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                             class="lni lni-plus"></i></a>
                                 </div>
                             </div>
                         </div>
                         &lt;!&ndash; Single Top Product Card&ndash;&gt;
                         <div class="col-6 col-sm-4 col-lg-3">
                             <div class="card top-product-card mb-3">
                                 <div class="card-body"><span class="badge badge-danger">-15%</span><a
                                         class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                         class="product-thumbnail d-block" href="single-product.html"><img class="mb-2"
                                                                                                           src="img/product/9.png"
                                                                                                           alt=""></a><a
                                         class="product-title d-block" href="single-product.html">Sneaker Shoes</a>
                                     <p class="sale-price">$87<span>$92</span></p>
                                     <div class="product-rating"><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                                     <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                             class="lni lni-plus"></i></a>
                                 </div>
                             </div>
                         </div>
                         &lt;!&ndash; Single Top Product Card&ndash;&gt;
                         <div class="col-6 col-sm-4 col-lg-3">
                             <div class="card top-product-card mb-3">
                                 <div class="card-body"><span class="badge badge-danger">-11%</span><a
                                         class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                         class="product-thumbnail d-block" href="single-product.html"><img class="mb-2"
                                                                                                           src="img/product/8.png"
                                                                                                           alt=""></a><a
                                         class="product-title d-block" href="single-product.html">Wooden Chair</a>
                                     <p class="sale-price">$21<span>$25</span></p>
                                     <div class="product-rating"><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                                     <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                             class="lni lni-plus"></i></a>
                                 </div>
                             </div>
                         </div>
                         &lt;!&ndash; Single Top Product Card&ndash;&gt;
                         <div class="col-6 col-sm-4 col-lg-3">
                             <div class="card top-product-card mb-3">
                                 <div class="card-body"><span class="badge badge-warning">Hot</span><a
                                         class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                         class="product-thumbnail d-block" href="single-product.html"><img class="mb-2"
                                                                                                           src="img/product/4.png"
                                                                                                           alt=""></a><a
                                         class="product-title d-block" href="single-product.html">Polo Shirts</a>
                                     <p class="sale-price">$38<span>$41</span></p>
                                     <div class="product-rating"><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i><i
                                             class="lni lni-star-filled"></i><i class="lni lni-star-filled"></i></div>
                                     <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                             class="lni lni-plus"></i></a>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>-->
            <!-- Cool Facts Area-->
            <div class="cta-area position-relative">
                <div class="container">
                    <div class="cta-text p-4 p-lg-5">
                        <h4>Cчетчики</h4>

                            <router-link
                                    class="btn btn-danger" to="/counters">Открыть</router-link>
                            <img src="./../assets/sch_small_2.png" alt="">
                    </div>
                </div>
            </div>
            <!-- Weekly Best Sellers-->
            <!-- <div class="weekly-best-seller-area pt-3">
                 <div class="container">
                     <div class="section-heading d-flex align-items-center justify-content-between">
                         <h6 class="pl-1">Weekly Best Sellers</h6><a class="btn btn-success btn-sm"
                                                                     href="shop-list.html">View All</a>
                     </div>
                     <div class="row">
                         &lt;!&ndash; Single Weekly Product Card&ndash;&gt;
                         <div class="col-12 col-md-6">
                             <div class="card weekly-product-card mb-3">
                                 <div class="card-body d-flex align-items-center">
                                     <div class="product-thumbnail-side"><span class="badge badge-success">Sale</span><a
                                             class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                             class="product-thumbnail d-block" href="single-product.html"><img
                                             src="img/product/10.png" alt=""></a></div>
                                     <div class="product-description"><a class="product-title d-block"
                                                                         href="single-product.html">Modern Red Sofa</a>
                                         <p class="sale-price"><i class="lni lni-dollar"></i>$64<span>$89</span></p>
                                         <div class="product-rating"><i class="lni lni-star-filled"></i>4.88 (39)</div>
                                         <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                                 class="mr-1 lni lni-cart"></i>Buy Now</a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         &lt;!&ndash; Single Weekly Product Card&ndash;&gt;
                         <div class="col-12 col-md-6">
                             <div class="card weekly-product-card mb-3">
                                 <div class="card-body d-flex align-items-center">
                                     <div class="product-thumbnail-side"><span class="badge badge-primary">Sale</span><a
                                             class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                             class="product-thumbnail d-block" href="single-product.html"><img
                                             src="img/product/7.png" alt=""></a></div>
                                     <div class="product-description"><a class="product-title d-block"
                                                                         href="single-product.html">Office Chair</a>
                                         <p class="sale-price"><i class="lni lni-dollar"></i>$100<span>$160</span></p>
                                         <div class="product-rating"><i class="lni lni-star-filled"></i>4.82 (125)</div>
                                         <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                                 class="mr-1 lni lni-cart"></i>Buy Now</a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         &lt;!&ndash; Single Weekly Product Card&ndash;&gt;
                         <div class="col-12 col-md-6">
                             <div class="card weekly-product-card mb-3">
                                 <div class="card-body d-flex align-items-center">
                                     <div class="product-thumbnail-side"><span class="badge badge-danger">-10%</span><a
                                             class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                             class="product-thumbnail d-block" href="single-product.html"><img
                                             src="img/product/12.png" alt=""></a></div>
                                     <div class="product-description"><a class="product-title d-block"
                                                                         href="single-product.html">Sun Glasses</a>
                                         <p class="sale-price"><i class="lni lni-dollar"></i>$24<span>$32</span></p>
                                         <div class="product-rating"><i class="lni lni-star-filled"></i>4.79 (63)</div>
                                         <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                                 class="mr-1 lni lni-cart"></i>Buy Now</a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                         &lt;!&ndash; Single Weekly Product Card&ndash;&gt;
                         <div class="col-12 col-md-6">
                             <div class="card weekly-product-card mb-3">
                                 <div class="card-body d-flex align-items-center">
                                     <div class="product-thumbnail-side"><span class="badge badge-warning">New</span><a
                                             class="wishlist-btn" href="#"><i class="lni lni-heart"></i></a><a
                                             class="product-thumbnail d-block" href="single-product.html"><img
                                             src="img/product/13.png" alt=""></a></div>
                                     <div class="product-description"><a class="product-title d-block"
                                                                         href="single-product.html">Wall Clock</a>
                                         <p class="sale-price"><i class="lni lni-dollar"></i>$31<span>$47</span></p>
                                         <div class="product-rating"><i class="lni lni-star-filled"></i>4.99 (7)</div>
                                         <a class="btn btn-success btn-sm add2cart-notify" href="#"><i
                                                 class="mr-1 lni lni-cart"></i>Buy Now</a>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>-->
            <!-- Discount Coupon Card-->
            <div class="container" style="padding-bottom: 10px;">
                <div class="card discount-coupon-card border-0">
                    <div class="card-body">
                        <div class="coupon-text-wrap d-flex align-items-center p-3">
                            <h5 class="text-white pr-3 mb-0">Переход на текстовую страницу</h5>
                            <!--<p class="text-white pl-3 mb-0"><strong
                                    class="px-1"></strong></p>-->
                        </div>
                    </div>
                </div>
            </div>
            <!-- Featured Products Wrapper-->
            <!--<div class="featured-products-wrapper mt-3">
                <div class="container">
                    <div class="section-heading d-flex align-items-center justify-content-between">
                        <h6 class="pl-1">Featured Products</h6><a class="btn btn-warning btn-sm"
                                                                  href="featured-products.html">View All</a>
                    </div>
                    <div class="row">
                        &lt;!&ndash; Featured Product Card&ndash;&gt;
                        <div class="col-6 col-sm-4 col-lg-3">
                            <div class="card featured-product-card mb-3">
                                <div class="card-body"><span class="badge badge-warning custom-badge"><i
                                        class="lni lni-star"></i></span>
                                    <div class="product-thumbnail-side"><a class="wishlist-btn" href="#"><i
                                            class="lni lni-heart"></i></a><a class="product-thumbnail d-block"
                                                                             href="single-product.html"><img
                                            src="img/product/14.png" alt=""></a></div>
                                    <div class="product-description"><a class="product-title d-block"
                                                                        href="single-product.html">Blue Skateboard</a>
                                        <p class="sale-price">$64<span>$89</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; Featured Product Card&ndash;&gt;
                        <div class="col-6 col-sm-4 col-lg-3">
                            <div class="card featured-product-card mb-3">
                                <div class="card-body"><span class="badge badge-warning custom-badge"><i
                                        class="lni lni-star"></i></span>
                                    <div class="product-thumbnail-side"><a class="wishlist-btn" href="#"><i
                                            class="lni lni-heart"></i></a><a class="product-thumbnail d-block"
                                                                             href="single-product.html"><img
                                            src="img/product/15.png" alt=""></a></div>
                                    <div class="product-description"><a class="product-title d-block"
                                                                        href="single-product.html">Travel Bag</a>
                                        <p class="sale-price">$64<span>$89</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; Featured Product Card&ndash;&gt;
                        <div class="col-6 col-sm-4 col-lg-3">
                            <div class="card featured-product-card mb-3">
                                <div class="card-body"><span class="badge badge-warning custom-badge"><i
                                        class="lni lni-star"></i></span>
                                    <div class="product-thumbnail-side"><a class="wishlist-btn" href="#"><i
                                            class="lni lni-heart"></i></a><a class="product-thumbnail d-block"
                                                                             href="single-product.html"><img
                                            src="img/product/16.png" alt=""></a></div>
                                    <div class="product-description"><a class="product-title d-block"
                                                                        href="single-product.html">Cotton T-shirts</a>
                                        <p class="sale-price">$64<span>$89</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        &lt;!&ndash; Featured Product Card&ndash;&gt;
                        <div class="col-6 col-sm-4 col-lg-3">
                            <div class="card featured-product-card mb-3">
                                <div class="card-body"><span class="badge badge-warning custom-badge"><i
                                        class="lni lni-star"></i></span>
                                    <div class="product-thumbnail-side"><a class="wishlist-btn" href="#"><i
                                            class="lni lni-heart"></i></a><a class="product-thumbnail d-block"
                                                                             href="single-product.html"><img
                                            src="img/product/6.png" alt=""></a></div>
                                    <div class="product-description"><a class="product-title d-block"
                                                                        href="single-product.html">Roof Lamp </a>
                                        <p class="sale-price">$64<span>$89</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->
        </div>
        <!-- Footer Nav-->
        <Footer />
    </div>
</template>

<script>
    import $ from 'jquery';
    import SideMenu from "../components/SideMenu";
    import side_menu from "../mixins/side_menu";
    import HeroSlides from "../components/HeroSlides";
    import Footer from "../components/Footer";
    import Header from "../components/Header";

    export default {
        components: {Header, Footer, HeroSlides, SideMenu},
        data: () => ({}),
        mixins: [side_menu],
        methods: {},
        mounted() {

        }
    }
</script>

<style scoped lang="scss">


    .cta-area {
        margin-bottom: 17px;
    }

    .cta-text {
        img {
            position: absolute;
            right: 5%;
            top: 7%;
        }
    }

    .discount-coupon-card {
        margin-bottom: 17px;
    }

    .catagory-card {
        min-height: 113px;

        .card-body {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>