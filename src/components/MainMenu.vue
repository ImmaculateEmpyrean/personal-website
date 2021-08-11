<template>
    <div class="main-menu hidden">
			<ul>
				<li><Button buttonText="Portfolio" showButton="true" class="color-inverted full-width" /></li>
				<li><Button buttonText="About Me"  showButton="true" class="color-inverted full-width" /></li>
				<li><Button buttonText="Contact Information"  showButton="true" class="color-inverted full-width" /></li>
				<li><Button buttonText="Leave Message Here"  showButton="true" class="color-inverted full-width" /></li>
			</ul>
		</div>
</template>

<script>
import Button from './Button.vue';

export default {
    name: "MainMenu",
    components:{
        Button
    }
}
</script>

<style lang="scss" scoped>
    h1{
        color: white;
    }
    .main-menu {
		transition: transform 2s ease-in-out 0s;

		position: absolute;
		width: 40vw;
		height: 100vh;
		right: 0;
		bottom: 0;
		overflow: hidden;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background: black;
		z-index: 1000;

		ul li {
			padding: 14px 0;

			a {
				font-size: 1.2vw;
			}
		}

		&.hidden {
			transform: translateX(40vw);
		}
	}
</style>
