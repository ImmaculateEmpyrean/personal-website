<template>
<div class="me-container">
    <Content :heading1="heading1" :heading2="heading2" :caption="caption" :description="description" :buttonText="buttonText"
             :showCaption="showCaption" :showButton="showButton" :imagePath="imagePath" :imagePosition="'left'" :imageInvertColor="imageInvertColor"
             @wheel="wheelEvent" v-touch:swipe.top="swipeUp" v-touch:swipe.bottom="swipeDown" @buttonClicked="processMeDetail" />
    <div class="me-detail-container">
        <transition 
            name="routerTransition"
            :enter-active-class="'animate__animated animate__fadeInUpBig'"
            :leave-active-class="'animate__animated animate__fadeOutDown'"
            mode="out-in"
        >
            <MeDetail   v-show="showMeDetail" 
                        @enablePageScrolling="$emit('enablePageScrolling')" 
                        @disablePageScrolling="$emit('disablePageScrolling')"
                        @setTransitionZoom="$emit('setTransitionZoom')"
                        @hide-MeDetail="hideMeDetailWindow"/>
        </transition>
    </div>
</div>
</template>

<script>
import Content from '@/components/Content.vue';
import MeDetail from '@/components/MeDetail.vue';

export default {
    name: 'Me',
    components: {
        Content,
        MeDetail
    },
    data (){
        return {
            heading1:"Me",
            heading2:"Automatons",
            caption: "NULL",
            showCaption: false,
            description: "I was definitely the cool kid (PROBABLY), reading russian and german literature \
                                        definitely gave me enough imagination to believe something like that.",
            showButton: true,
            buttonText: "Tell Me More",
            imagePath: require("@/assets/me.png"),

            next: "ContactMe",
            previous: "DevJourney",

            showMeDetail: false,
            imageInvertColor: false
        }
    },
    props:{
        processWheel:{
            type: Boolean,
            default: true
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

        processMeDetail() {
            if(this.showMeDetail == false)
                this.showMeDetailWindow();
            else
                this.hideMeDetailWindow();
        },

        showMeDetailWindow(){
            let that = this;
            this.$emit('disableProcessWheel');

            this.$emit('hideScrollIndicator');
            setTimeout(function(){
                let content =  that.$el.querySelector('.container');
                content.classList.add('inverted-color');

                that.buttonText = "Tell Me Less";
                
                let button = content.querySelector('mainButton');
                button.classList.add("color-inverted");
                
                that.imageInvertColor = true;

                let textBoxInternal = document.querySelector('.text-box-internal')
                const textBoxInternalStyle = getComputedStyle(textBoxInternal);
                content.style.maxHeight = textBoxInternalStyle.height;
                textBoxInternal.classList.add('add-padding-left');
            },2000)

            setTimeout(function(){
                that.showMeDetail = true;

                setTimeout(function(){
                    that.$emit('enablePageScrolling');
                },2000);
            },4000);
        },
        hideMeDetailWindow(){
            let that = this;

            this.scrollTo(0 ,function(){
                that.$emit('disablePageScrolling');
            
                that.showMeDetail = false;

                let content =  that.$el.querySelector('.container');
                content.classList.remove('inverted-color');
                let textBoxInternal = that.$el.querySelector('.text-box-internal');
                textBoxInternal.classList.remove('add-padding-left');

                that.buttonText = "Tell Me More";

                let button = content.querySelector('mainButton');
                button.classList.remove("color-inverted");
                
                that.imageInvertColor = false;

                setTimeout(function(){
                    content.style.maxHeight = "100%";

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
            pageNumber: 3
        });
    },
}
</script>

<style lang="scss" scoped>
.me-container{
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
}
</style>