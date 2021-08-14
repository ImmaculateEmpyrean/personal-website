<template>
    <Content :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
             :showCaption="showCaption" :showButton="showButton" :imagePath="imagePath" 
             @wheel="wheelEvent" v-touch:swipe.top="swipeUp" v-touch:swipe.bottom="swipeDown"/> 
</template>

<script>
import Content from '@/components/Content.vue';

export default {
    name: 'DevJourney',
    components: {
        Content
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
            imagePath: require("@/assets/dev-journey.png"),

            next: "Me",
            previous: "/"
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