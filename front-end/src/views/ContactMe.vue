<template>
    <div class="contact-wrapper" @wheel="wheelEvent" v-touch:swipe.bottom="swipeDown">
        <ContactPanel @setTransitionZoom="$emit('setTransitionZoom')"/>
        <MainImageDisplay :imagePath="imagePath" v-show="atleastDesktop"/>
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
    props:{
        processWheel:{
            type: Boolean,
            default: true
        }
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
            if(this.processWheel === true){
                if (e.deltaY < 0) {
                    await this.$emit("renderPreviousView");
                    this.$router.push(this.previous);
                } 
            }
        },
        async swipeDown(){
            if(this.processWheel === true){
                await this.$emit("renderPreviousView");
                this.$router.push(this.previous);
            }
        }
    },
    computed: {
        atleastDesktop: function(){
            if(window.innerWidth >= 1024){
                return true;
            } else return false;
        }
    },
    mounted(){
        this.$emit('updateScrollIndicator',{
            showScrollIndicator: true,
            pageNumber: 4
        });
    },
}
</script>

<style lang="scss" scoped>
    .contact-wrapper{
        flex: 1 1 100%;
        display: flex;
    }
</style>