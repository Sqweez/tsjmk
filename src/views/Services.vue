<template>
    <div>
        <Header title="Список услуг"/>
        <SideMenu/>
        <div class="page-content-wrapper">

        </div>
        <div class="top-products-area pt-3 pb-5">
            <div class="container">
                <div class="section-heading d-flex align-items-center justify-content-between">
                    <h6 class="ml-1">Список услуг</h6>
                    <!-- Layout Options-->
                </div>
                <div class="row">
                    <!-- Single Blog Card-->
                    <div class="col-12 col-sm-6 col-lg-4">
                        <div class="card blog-card list-card mb-3">
                            <!-- Post Image-->
                            <div class="post-img"><img src="./../img/bg-img/12.jpg" alt=""></div>
                            <!-- Post Bookmark-->
                            <!--<a class="post-bookmark" href="#"><i class="lni lni-bookmark"></i></a>-->
                            <!-- Read More Button--><router-link class="btn btn-danger btn-sm read-more-btn"
                                                       to="/service-details">Смотреть</router-link>
                            <!-- Post Content-->
                            <div class="post-content">
                                <div class="bg-shapes">
                                    <div class="circle1"></div>
                                    <div class="circle2"></div>
                                    <div class="circle3"></div>
                                    <div class="circle4"></div>
                                </div>
                                <!-- Post Catagory--><span class="post-catagory d-block" href="#">Обзор</span>
                                <!-- Post Title--><router-link class="post-title d-block" to="/service-details">Пример
                                услуги</router-link>
                                <!-- Post Meta-->
                                <div class="post-meta d-flex align-items-center justify-content-between flex-wrap"><a
                                        href="#"><i class="lni lni-user"></i>МК</a><span><i
                                        class="lni lni-timer"></i>2 мин</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4">
                        <div class="card blog-card list-card mb-3">
                            <!-- Post Image-->
                            <div class="post-img"><img src="./../img/bg-img/12.jpg" alt=""></div>
                            <!-- Post Bookmark-->
                            <!--<a class="post-bookmark" href="#"><i class="lni lni-bookmark"></i></a>-->
                            <!-- Read More Button--><router-link class="btn btn-danger btn-sm read-more-btn"
                                                                 to="/service-details">Смотреть</router-link>
                            <!-- Post Content-->
                            <div class="post-content">
                                <div class="bg-shapes">
                                    <div class="circle1"></div>
                                    <div class="circle2"></div>
                                    <div class="circle3"></div>
                                    <div class="circle4"></div>
                                </div>
                                <!-- Post Catagory--><span class="post-catagory d-block" href="#">Обзор</span>
                                <!-- Post Title--><router-link class="post-title d-block" to="/service-details">Пример
                                услуги</router-link>
                                <!-- Post Meta-->
                                <div class="post-meta d-flex align-items-center justify-content-between flex-wrap"><a
                                        href="#"><i class="lni lni-user"></i>МК</a><span><i
                                        class="lni lni-timer"></i>2 мин</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-lg-4">
                        <div class="card blog-card list-card mb-3">
                            <!-- Post Image-->
                            <div class="post-img"><img src="./../img/bg-img/12.jpg" alt=""></div>
                            <!-- Post Bookmark-->
                            <!--<a class="post-bookmark" href="#"><i class="lni lni-bookmark"></i></a>-->
                            <!-- Read More Button--><router-link class="btn btn-danger btn-sm read-more-btn"
                                                                 to="/service-details">Смотреть</router-link>
                            <!-- Post Content-->
                            <div class="post-content">
                                <div class="bg-shapes">
                                    <div class="circle1"></div>
                                    <div class="circle2"></div>
                                    <div class="circle3"></div>
                                    <div class="circle4"></div>
                                </div>
                                <!-- Post Catagory--><span class="post-catagory d-block" href="#">Обзор</span>
                                <!-- Post Title--><router-link class="post-title d-block" to="/service-details">Пример
                                услуги</router-link>
                                <!-- Post Meta-->
                                <div class="post-meta d-flex align-items-center justify-content-between flex-wrap"><a
                                        href="#"><i class="lni lni-user"></i>МК</a><span><i
                                        class="lni lni-timer"></i>2 мин</span></div>
                            </div>
                        </div>
                    </div>

                    <!-- Single Blog Card-->
                </div>
            </div>
            <!--<div class="container">
                <div class="section-heading">
                    <h6 class="ml-1">Read by category</h6>
                </div>
                <div class="row">
                    &lt;!&ndash; Single Blog Catagory&ndash;&gt;
                    <div class="col-6 col-sm-4">
                        <div class="card blog-catagory-card mb-3">
                            <div class="card-body"><a href="#"><i class="lni lni-quotation"></i><span class="d-block">Review</span></a>
                            </div>
                        </div>
                    </div>
                    &lt;!&ndash; Single Blog Catagory&ndash;&gt;
                    <div class="col-6 col-sm-4">
                        <div class="card blog-catagory-card mb-3">
                            <div class="card-body"><a href="#"><i class="lni lni-shopping-basket"></i><span
                                    class="d-block">Shopping</span></a></div>
                        </div>
                    </div>
                    &lt;!&ndash; Single Blog Catagory&ndash;&gt;
                    <div class="col-6 col-sm-4">
                        <div class="card blog-catagory-card mb-3">
                            <div class="card-body"><a href="#"><i class="lni lni-bulb"></i><span
                                    class="d-block">Tips</span></a></div>
                        </div>
                    </div>
                    &lt;!&ndash; Single Blog Catagory&ndash;&gt;
                    <div class="col-6 col-sm-4">
                        <div class="card blog-catagory-card mb-3">
                            <div class="card-body"><a href="#"><i class="lni lni-offer"></i><span
                                    class="d-block">Offer</span></a></div>
                        </div>
                    </div>
                    &lt;!&ndash; Single Blog Catagory&ndash;&gt;
                    <div class="col-6 col-sm-4">
                        <div class="card blog-catagory-card mb-3">
                            <div class="card-body"><a href="#"><i class="lni lni-bolt-alt"></i><span class="d-block">Trends</span></a>
                            </div>
                        </div>
                    </div>
                    &lt;!&ndash; Single Blog Catagory&ndash;&gt;
                    <div class="col-6 col-sm-4">
                        <div class="card blog-catagory-card mb-3">
                            <div class="card-body"><a href="#"><i class="lni lni-paperclip"></i><span class="d-block">News</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>-->
        </div>
        <Footer/>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import SideMenu from "../components/SideMenu";
    import Footer from "../components/Footer";

    export default {
        components: {Footer, SideMenu, Header},
        data: () => ({}),
        methods: {},
        computed: {}
    }
</script>

<style scoped lang="scss">
    .post-catagory {
        color: #ea4c62;
    }
</style>