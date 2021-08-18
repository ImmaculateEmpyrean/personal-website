<template>
<div class="dev-container">
    <Content :heading1="heading1" :heading2="heading2" :caption="caption" :description="description" :buttonText="buttonText"
             :showCaption="showCaption" :showButton="showButton" :imagePath="imagePath" :imagePosition="'left'" :imageInvertColor="imageInvertColor"
             @wheel="wheelEvent" v-touch:swipe.top="swipeUp" v-touch:swipe.bottom="swipeDown" @buttonClicked="processDevDetail" />
    <div class="dev-detail-container">
        <transition 
            name="routerTransition"
            :enter-active-class="'animate__animated animate__fadeInUp'"
            :leave-active-class="'animate__animated animate__fadeOutDown'"
            mode="out-in"
        >
            <PortfolioDetail v-show="showDevDetail" 
                        @enablePageScrolling="$emit('enablePageScrolling')" 
                        @disablePageScrolling="$emit('disablePageScrolling')"
                        @setTransitionZoom="$emit('setTransitionZoom')"
                        @hide-DevDetail="hideDevDetailWindow"/>
        </transition>
    </div>
</div>
</template>

<script>
import Content from '@/components/Content.vue';
import PortfolioDetail from '@/components/portfolio-detail/PortfolioDetail.vue';

export default {
    name: 'DevJourney',
    components: {
        Content,
        PortfolioDetail
    },
    props:{
        processWheel:{
            type: Boolean,
            default: true
        }
    },
    data (){
        return {
            heading1:"Dev",
            heading2:"Journey",
            caption: "NULL",
            showCaption: false,
            description: "My adventure in the land of computer\
                        science is filled with exciting tales of\
                        full-stack web, video games,video game engines ending\
                        also with a strong foray into the land of \
                        embeded programming and databases.",
            showButton: true,
            buttonText: "Tell Me More",
            imagePath: require("@/assets/dev-journey.png"),

            next: "Me",
            previous: "/",

            showDevDetail: false,
            imageInvertColor: false
        }
    },
    methods:{
        scrollTo(offset, callback) {
            const fixedOffset = offset.toFixed();
            const onScroll = function () {
                    if (window.pageYOffset.toFixed() === fixedOffset) {
                        window.removeEventListener('scroll', onScroll)
                        callback()
                    }
                }

            window.addEventListener('scroll', onScroll)
            onScroll()
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            })
        },
        async wheelEvent(e){
            if(this.processWheel === true){
                if (e.deltaY < 0) {
                    await this.$emit("renderPreviousView");
                    this.$router.push(this.previous);
                } else if (e.deltaY > 0) {
                    await this.$emit("renderNextView");
                    this.$router.push(this.next);
                }
            }
        },

        async swipeUp(){
            if(this.processWheel === true){
                await this.$emit("renderNextView");
                this.$router.push(this.next);
            }
        },
        async swipeDown(){
            if(this.processWheel === true){
                await this.$emit("renderPreviousView");
                this.$router.push(this.previous);
            }
        },


        processDevDetail() {
            if(this.showDevDetail == false)
                this.showDevDetailWindow();
            else
                this.hideDevDetailWindow();
        },

        showDevDetailWindow(){
            let that = this;
            this.$emit('disableProcessWheel');

            this.$emit('hideScrollIndicator');
            setTimeout(function(){
                let content =  that.$el.querySelector('.container');
                content.classList.add('inverted-color');

                that.buttonText = "Tell Me Less";
                let button = content.querySelector('button');
                button.classList.add("color-inverted");
                
                that.imageInvertColor = true;

                let textBoxInternal = document.querySelector('.text-box-internal')
                const textBoxInternalStyle = getComputedStyle(textBoxInternal);
                content.style.maxHeight = textBoxInternalStyle.height;
                content.style.minHeight = textBoxInternalStyle.height;

                textBoxInternal.classList.add('add-padding-left');
            },2000)

            setTimeout(function(){
                that.showDevDetail = true;

                setTimeout(function(){
                    that.$emit('enablePageScrolling');
                },2000);
            },4000);
        },
        hideDevDetailWindow(){
            let that = this;

            this.scrollTo(0 ,function(){
                that.$emit('disablePageScrolling');
            
                that.showDevDetail = false;

                let content =  that.$el.querySelector('.container');
                content.classList.remove('inverted-color');
                let textBoxInternal = that.$el.querySelector('.text-box-internal');
                textBoxInternal.classList.remove('add-padding-left');

                that.buttonText = "Tell Me More";

                let button = content.querySelector('button');
                button.classList.remove("color-inverted");
                
                that.imageInvertColor = false;

                setTimeout(function(){
                    content.style.maxHeight = "100%";
                    //content.style.minHeight = "100%";

                    setTimeout(function(){
                        that.$emit('showScrollIndicator');
                        that.$emit('enableProcessWheel');

                    },2000)
                }, 2000);
            });
        }
    },
    mounted(){
        this.$emit('updateScrollIndicator',{
            showScrollIndicator: true,
            pageNumber: 2
        });
    },
}
</script>

<style lang="scss">
    .dev-container{
        flex: 1 1 100%;
        display: flex;
        flex-direction: column;
    }
</style>