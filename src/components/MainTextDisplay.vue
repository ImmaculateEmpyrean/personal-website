<template>
    <div class="text-box">
        <h1>Veeru</h1>
        <h1>Empyrean</h1>
        <h2>Portfolio</h2>
        <img src="@/assets/logo-line.svg" alt="logo-line">
        <p>video game programmer / web designer and programmer</p>
    </div>
</template>

<script>
export default {
    name: "MainTextDisplay",
}
</script>

<style lang="scss" scoped>
    .text-box {
        flex: 1 1 50%;
        border : 1px solid blue;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1{
        font-family: 'Futura' sans-serif;
    }

</style>
