<template>
    <div class="hero-slides owl-carousel">
        <!-- Single Hero Slide-->
        <div class="single-hero-slide"
             v-for="image of images"
             :style="{
                 backgroundImage: `url('${require('./../img/bg-img/' + image)}')`
             }">
            <div class="slide-content h-100 d-flex align-items-center">
                <div class="container">
                    <h4 class="text-white mb-0" data-animation="fadeInUp" data-delay="100ms" data-wow-duration="1000ms">
                        Amazon Echo</h4>
                    <p class="text-white" data-animation="fadeInUp" data-delay="400ms" data-wow-duration="1000ms">3rd
                        Generation, Charcoal</p><a class="btn btn-primary btn-sm" href="#" data-animation="fadeInUp"
                                                   data-delay="800ms" data-wow-duration="1000ms">Buy Now</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from 'jquery';
    import 'owl.carousel';

    export default {
        data: () => ({
            images: [
                '1.jpg',
                '2.jpg',
                '3.jpg'
            ]
        }),
        methods: {},
        computed: {},
        mounted() {
           var welcomeSlider = $('.hero-slides');
            welcomeSlider.owlCarousel({
                items: 1,
                loop: true,
                autoplay: true,
                dots: true,
                center: true,
                margin: 0,
                nav: true,
                navText: [('<i class="lni lni-chevron-left"></i>'), ('<i class="lni lni-chevron-right"></i>')]
            })

            welcomeSlider.on('translate.owl.carousel', function () {
                var layer = $("[data-animation]");
                layer.each(function () {
                    var anim_name = $(this).data('animation');
                    $(this).removeClass('animated ' + anim_name).css('opacity', '0');
                });
            });

            $("[data-delay]").each(function () {
                var anim_del = $(this).data('delay');
                $(this).css('animation-delay', anim_del);
            });

            $("[data-duration]").each(function () {
                var anim_dur = $(this).data('duration');
                $(this).css('animation-duration', anim_dur);
            });

            welcomeSlider.on('translated.owl.carousel', function () {
                var layer = welcomeSlider.find('.owl-item.active').find("[data-animation]");
                layer.each(function () {
                    var anim_name = $(this).data('animation');
                    $(this).addClass('animated ' + anim_name).css('opacity', '1');
                });
            });
        }
    }
</script>

<style scoped>

</style>