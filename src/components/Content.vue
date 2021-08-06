<template>
    <div class="container">
        <ScrollIndicator  />
        <MainTextDisplay  />
        <MainImageDisplay />
    </div>
</template>


<script>
import ScrollIndicator  from '@/ScrollIndicator.vue' ;
import MainTextDisplay  from '@/MainTextDisplay.vue' ;
import MainImageDisplay from '@/MainImageDisplay.vue';

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

</style>
