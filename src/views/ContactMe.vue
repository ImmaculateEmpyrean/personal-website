<template>
    <div class="contact-wrapper">
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
            imagePath: require('@/assets/contact-me.png')
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