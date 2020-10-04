<template>
    <div>
        <Header title="Детали услуги" />
        <SideMenu />
        <div class="page-content-wrapper">
            <div class="blog-details-post-thumbnail"
                 :style="
                         {backgroundImage: `url('${require('./../img/bg-img/6.jpg')}')`}">
                <div class="container">
                    <!--<div class="post-bookmark-wrap">
                        &lt;!&ndash; Post Bookmark&ndash;&gt;<a class="post-bookmark" href="#"><i class="lni lni-bookmark"></i></a>
                    </div>-->
                </div>
            </div>
            <div class="product-description pb-3">
                <!-- Product Title & Meta Data-->
                <div class="product-title-meta-data bg-white mb-3 py-3">
                    <div class="container">
                        <h5 class="post-title">Название услуги</h5>
                        <a class="post-catagory mb-3 d-block" href="#">Категория</a>
                        <div class="post-meta-data d-flex align-items-center justify-content-between">
                            <a class="d-flex align-items-center" href="#">
                                <img src="./../assets/logow.svg" alt="">
                                МК
                               <!-- <span>Follow</span>-->
                            </a>
                            <span>
                            <i class="lni lni-timer"></i>4 мин</span></div>
                    </div>
                </div>
                <div class="post-content bg-white py-3 mb-3">
                    <div class="container">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta delectus distinctio officiis! Quisquam blanditiis voluptatibus, quod doloribus modi, impedit in dolores voluptates, aliquam facilis architecto eligendi laudantium eos!</p>
                        <h6>The top shopping deals is the year 2020.</h6>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum necessitatibus dicta adipisci tempora beatae impedit similique qui sit, ea possimus eos odit, voluptatum totam voluptates iure quo?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis cupiditate quis molestias molestiae minus vel, ipsam corporis aut error libero tenetur facere assumenda soluta esse? Perferendis, eum!</p><a class="mb-3 d-block h6" href="#">How to easily buy a product?</a>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quasi quas eligendi adipisci quaerat totam. Veritatis ratione a numquam molestias, sit at molestiae excepturi totam dolore, hic fugiat. Incidunt modi odit iure ipsam amet illo placeat laboriosam.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet porro, consectetur cum ea aut dolores officia magni laudantium, sed hic ad nulla laborum quam minima voluptatum, labore ipsam.</p>
                    </div>
                </div>
                <!-- All Comments-->
                <!--<div class="rating-and-review-wrapper bg-white py-3 mb-3">
                    <div class="container">
                        <h6>Comments (3)</h6>
                        <div class="rating-review-content">
                            <ul>
                                <li class="single-user-review d-flex">
                                    <div class="user-thumbnail mt-0"><img src="img/bg-img/7.jpg" alt=""></div>
                                    <div class="rating-comment">
                                        <p class="comment mb-0">Very good product. It's just amazing!</p><span class="name-date">Designing World 12 Dec 2020</span>
                                    </div>
                                </li>
                                <li class="single-user-review d-flex">
                                    <div class="user-thumbnail mt-0"><img src="img/bg-img/8.jpg" alt=""></div>
                                    <div class="rating-comment">
                                        <p class="comment mb-0">WOW excellent product. Love it.</p><span class="name-date">Designing World 8 Dec 2020</span>
                                    </div>
                                </li>
                                <li class="single-user-review d-flex">
                                    <div class="user-thumbnail mt-0"><img src="img/bg-img/9.jpg" alt=""></div>
                                    <div class="rating-comment">
                                        <p class="comment mb-0">What a nice product it is. I am looking it's.</p><span class="name-date">Designing World 28 Nov 2020</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>-->
                <!-- Comment Form-->
                <!--<div class="ratings-submit-form bg-white py-3">
                    <div class="container">
                        <h6>Submit A Comment</h6>
                        <form action="#" method="">
                            <div class="form-group">
                                <textarea class="form-control" id="comments" name="comment" cols="30" rows="10" data-max-length="200"></textarea>
                            </div>
                            <button class="btn btn-sm btn-primary" type="submit">Post Comment</button>
                        </form>
                    </div>
                </div>-->
            </div>
        </div>
        <Footer />
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

<style scoped>

</style>