<template>
    <div class="contact-wrapper" @wheel="wheelEvent">
        <ContactPanel />
        <MainImageDisplay :imagePath="imagePath" />
    </div>
</template>

<script>
import MainImageDisplay from '../components/MainImageDisplay.vue';
import ContactPanel from '../components/ContactPanel.vue';

export default {
    name: 'ContactMe',
    components:{
        ContactPanel,
        MainImageDisplay
    },
    data(){
        return {
            imagePath: require('@/assets/contact-me.png'),

            next: null,
            previous: "Me"
        }
    },
    methods:{
        async wheelEvent(e){
             if (e.deltaY < 0) {
                await this.$emit("renderPreviousView");
                this.$router.push(this.previous);
            } 
        }
    }
}
</script>

<style lang="scss" scoped>
    .contact-wrapper{
        flex: 1 1 93%;
        display: flex;
    }
</style>