<template>
<div class="me-container">
    <Content :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
             :showCaption="showCaption" :showButton="showButton" :imagePath="imagePath" :imagePosition="'left'"
             @wheel="wheelEvent" v-touch:swipe.top="swipeUp" v-touch:swipe.bottom="swipeDown" @buttonClicked="processMeDetail" />
    <div class="me-detail-container">
        <transition 
            name="routerTransition"
            :enter-active-class="'animate__animated animate__fadeInUpBig'"
            :leave-active-class="'animate__animated animate__fadeOutDownBig'"
            mode="out-in"
        >
            <MeDetail v-show="showMeDetail" @enablePageScrolling="$emit('enablePageScrolling')" @disablePageScrolling="$emit('disablePageScrolling')"/>
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
            imagePath: require("@/assets/me.png"),

            next: "ContactMe",
            previous: "DevJourney",

            showMeDetail: false
        }
    },
    methods:{
        async wheelEvent(e){
             if (e.deltaY < 0) {
                await this.$emit("renderPreviousView");
                this.$router.push(this.previous);
            } else if (e.deltaY > 0) {
                await this.$emit("renderNextView");
                this.$router.push(this.next);
            }
        },

        async swipeUp(){
            await this.$emit("renderNextView");
            this.$router.push(this.next);
        },
        async swipeDown(){
            await this.$emit("renderPreviousView");
            this.$router.push(this.previous);
        },

        processMeDetail(){
            //this.showMeDetail = true;
            
            let meDetail = this.$el.querySelector('.me-detail');
            let content =  this.$el.querySelector('.container');
            
            content.classList.add('details-shown');

            const element = document.querySelector('.text-box-internal')
            const style = getComputedStyle(element)

            console.log(style.height)

            content.style.maxHeight = style.height;

            let that = this;
            setTimeout(function(){
                that.showMeDetail = true;
            },2000)
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
    display: flex;
    flex-direction: column;
}

.me-detail-container{
    //flex: 0 0 0%;
    border: 1px solid blue;

    &.shown{
        flex: 0 0 auto;
    }
}

.container{
    max-height: 100%;
}
// .container{
//     transition: height 2s, flex-basis 2s;
    
//     &.show{
//         flex: 0 0 70%;
//     }

//     border: 1px solid red;
// }

// .me-detail{
//     transition: flex-basis 2s;
//     flex: 0 0 0%;

//     border: 1px solid blue;

//     &.show{
//         flex: 0 0 30%;
//     }
// }
</style>