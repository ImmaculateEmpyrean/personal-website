<template>
    <div class="container">
        <ScrollIndicator  :currentPage="currentPage"/>
        <MainTextDisplay  />
        <MainImageDisplay />
    </div>
</template>


<script>
import ScrollIndicator  from '@/components/ScrollIndicator.vue' ;
import MainTextDisplay  from '@/components/MainTextDisplay.vue' ;
import MainImageDisplay from '@/components/MainImageDisplay.vue';

export default {
    name: "Content",
    components: {
        ScrollIndicator,
        MainTextDisplay,
        MainImageDisplay
    },

    props:{
        currentPage: {
            type: Number,
            default: 4
        }
    }
}
</script>


<style lang="scss" scoped>
    .container{
        flex: 1 1 93%;
        border: 1px solid red;

        display: flex;
    }
</style>
