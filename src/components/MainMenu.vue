<template>
    <div class="main-menu hidden">
			<ul>
				<li><Button @buttonClicked="navToPortfolio" buttonText="Portfolio" showButton="true" class="color-inverted full-width" /></li>
				<li><Button @buttonClicked="navToMe" buttonText="About Me"  showButton="true" class="color-inverted full-width" /></li>
				<li><Button @buttonClicked="navToContact" buttonText="Contact Information"  showButton="true" class="color-inverted full-width" /></li>
				<li><Button @buttonClicked="navToLeaveMessageHere" buttonText="Leave Message Here"  showButton="true" class="color-inverted full-width" /></li>
			</ul>
		</div>
</template>

<script>
import Button from './Button.vue';

export default {
    name: "MainMenu",
    components:{
        Button
    },
	methods:{
		nav(route){
			this.$emit('menuButtonClicked');
			this.$router.push(route);
		},
		navToPortfolio(){
			this.nav('/DevJourney');
		},
		navToMe(){
			this.nav('/Me');
		},
		navToContact(){
			this.nav('/ContactMe');
		},
		navToLeaveMessageHere(){
			this.nav('LeaveMessageHere');
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/sass/_settings.scss';

    h1{
        color: white;
    }
    .main-menu {
		transition: transform 2s ease-in-out 0s;

		position: fixed;
		width: 60vw;
		height: 100vh;
		right: 0;
		bottom: 0;
		overflow: hidden;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: black;
		z-index: 2;

		@include atleast-tablet{
			width: 40vw;
		}

		ul li {
			padding: $spacing-small 0;
			button {font-size: 16px;}

			@include atleast-tablet{
				padding: $spacing-normal 0;
				button {font-size: 20px;}
			}
			@include atleast-desktop{
				button {font-size: 1.2vw;}
			}
		}
		&.hidden {
			transform: translateX(60vw);

			@include atleast-tablet{
				transform: translateX(40vw);
			}
		}
	}
</style>
