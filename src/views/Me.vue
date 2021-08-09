<template>
    <Content :heading1="heading1" :heading2="heading2" :caption="caption" :description="description"
             :showCaption="showCaption" :showButton="showButton" :imagePath="imagePath"
             @wheel="wheelEvent" />
</template>

<script>
import Content from '@/components/Content.vue';

export default {
    name: 'Me',
    components: {
        Content
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
            previous: "DevJourney"
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
        }
    }
}
</script>