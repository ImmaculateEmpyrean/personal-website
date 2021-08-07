<template>
    <div class="container">
        <ScrollIndicator  />
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
