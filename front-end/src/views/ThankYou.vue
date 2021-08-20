<template>
    <div class="thank-you-container">
        <h1>Thank You respected {{personName}} For Leaving a Message On My Site,</h1>
        <ul>
            <li><p class="paragraph" id="paragraph-1"></p></li>
            <li><p class="paragraph" id="paragraph-2"></p></li>
            <li><p class="paragraph" id="paragraph-3"></p></li>
        </ul>

        <p class="paragraph" id="signature"></p>
        <img id="line-logo" src="@/assets/logo-line.svg" alt="logo-line" width = "250">
        <Button @buttonClicked="processOkay" :showButton="true" buttonText="Okay" id="okay-button"/>
    </div>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: "ThankYou",
    computed:{
        personName(){
            return this.$route.params.name;
        }
    },
    components:{
        Button
    },
    methods:{

        processOkay(){
            this.$emit('setTransitionZoom');
            this.$router.push('/ContactMe');
        }
    },
    async mounted(){
        
        this.$emit('updateScrollIndicator',{
            showScrollIndicator: false,
            pageNumber: null
        });

        this.$emit('enablePageScrolling');

        let paraOne     = this.$el.querySelector('#paragraph-1');
        let paraTwo     = this.$el.querySelector('#paragraph-2');
        let paraThree   = this.$el.querySelector('#paragraph-3');
        let signature   = this.$el.querySelector('#signature');

        let Typewriter = require("typewriter-effect/dist/core");

        let typewriterOne = new Typewriter(paraOne, {
            loop: false,
            delay: 75,
        });
        let typewriterTwo = new Typewriter(paraTwo, {
            loop: false,
            delay: 75,
        });
        let typewriterThree = new Typewriter(paraThree, {
            loop: false,
            delay: 75,
        });

        await typewriterOne
                .typeString(`I am very grateful that you have chosen to leave a message here\
                                           dear ${this.$route.params.name}. The next time you hear from me will be in person
                                           after I finish reviewing the contents of the message you left me.`)
                .start();

        await typewriterTwo
                .typeString('I hope to get back to you as soon as possible. a reply within\
                            2-3 business days is typical in normal circumstances.I take\
                            replying to the mail I recieve very seriously and hopefully I can prove that\
                            to you too.')
                .start();
        
        await typewriterThree
                .typeString("Should you require any assistance from my bot, please send in an email to 'empyreanBot@gmail.com' the bot watches this mail address regularly.\
                             The bot is extremely smart and can help you out in most cases without even notifying me.\
                             read the bot-help page for assistance on how to communicate with the bot.")
                .callFunction(function(){
                    let typewriterSignature = new Typewriter(signature, {
                        loop: false,
                        delay: 75,
                    });

                    typewriterSignature
                        .typeString('Yours Sincierly,<br/>Veeru Empyrean.')
                        .callFunction(function(){
                            let lineLogo = this.$el.querySelector('#line-logo');
                            lineLogo.classList.add('show');
                            lineLogo.classList.add('animate__animated');
                            lineLogo.classList.add('animate__fadeInLeft');
                        },this)
                        .start();
                },this)
                .start();
    },
}
</script>

<style lang="scss" scoped>
    @import '../assets/sass/_settings.scss';

    .thank-you-container{
        flex: 1 1 100%;
    }

    h1{
        margin-left: 14px;
    }

    #okay-button{
        display: flex;
        margin-right: 14px;
        margin-left: auto;
    }

    .paragraph{
        font-size: 16px;
        margin: 48px;
        max-width: 1000px;

        @include atleast-tablet{
            font-size: 20px;
        }

        @include atleast-desktop{
            font-size: 1.5vw;
        }
    }

    #signature{
        margin-bottom: 0;
    }

    #line-logo{
        display: none;
        margin-left: 48px;
        margin-top: 7px;
    }

    #line-logo.show{
        display: block;
    }

    button{
        margin-top: $spacing-normal;
    }
</style>