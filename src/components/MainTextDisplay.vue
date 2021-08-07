<template>
    <div class="text-box">
        <h1>{{heading1}}</h1>
        <h1>
            {{heading2}}
            <h2 v-show="showCaption">{{caption}}</h2>
        </h1>
        <img src="@/assets/logo-line.svg" alt="logo-line" width = "250">
        <p>{{description}}</p>
        <button v-show="showButton">Hanna</button>
    </div>
</template>

<script>
export default {
    name: "MainTextDisplay",
    props:{
        heading1:{
            type: String,
            default: "Veeru"
        },
        heading2:{
            type: String,
            default: "Empyrean"
        },
        caption:{
          type: String,
          default: "portfolio"  
        },
        showCaption:{
            type: Boolean,
            default: true
        },
        description:{
            type: String,
            default: "video game programmer & full stack web and database designer as well as developer"
        },
        showButton:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="scss" scoped>
    .text-box {
        flex: 1 1 45%;
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

    button{
        transition: background-color 1s,
                    color 1s;

        background-color: #000000;
        color: white;
        padding: 1.8vh 4vh;
        border: 5px solid black;

        margin-left: auto;
        margin-right: 14px;
        font-size: 20px;

        &:hover{
            color: black;
            background-color: white;
            border: 5px solid black;
        }
    }

</style>
