<template>
    <div class="scroll-box">
        <svg width="70" height="140" viewBox="0 0 70 140" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="135" width="35" height="5" rx="2.5" fill="black"/>
            <rect y="90" width="35" height="5" rx="2.5" fill="black"/>
            <rect y="45" width="35" height="5" rx="2.5" fill="black"/>
            <rect width="70" height="5" rx="2.5" fill="black"/>
        </svg>
    </div>
</template>


<script>
export default {
    name: "ScrollIndicator",
    props:{
        currentPage:{
            type: Number,
            default: 1
        }
    }
}
</script>


<style lang="scss" scoped>
    .scroll-box {
        flex: 0 0 5%;
        border : 1px solid blue;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>