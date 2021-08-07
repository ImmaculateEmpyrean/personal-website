<template>
    <div class="text-box">
        <h1>Veeru</h1>
        <h1>
            Empyrean
            <h2>Portfolio</h2>
        </h1>
        <img src="@/assets/logo-line.svg" alt="logo-line" width = "250">
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
        flex: 1 1 35%;
        border : 1px solid blue;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1{
        font-size: 5vw;
        margin-right: auto;

        font-family: Futura;
        font-style: normal;
        font-weight: 500;
        letter-spacing: 0.3em;
        text-transform: uppercase;

        color: #000000;
    }

    h2{
        font-family: Futura;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 70%;
        
        text-align: right;
        letter-spacing: 0.3em;
        text-transform: uppercase;

        color: #E12A2A;
    }

    p{
        margin-top: 14px;
        font-family: Futura Bk;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;

        letter-spacing: 0.2em;
        color: #000000;
    }

</style>
