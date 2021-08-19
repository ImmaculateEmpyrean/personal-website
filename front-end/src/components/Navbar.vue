<template>
	<div class="nav-bar">
		<div class="left">
			<img src="@/assets/logo.svg" alt="logo-icon" />
			<h1 class="subtitle">Veeru Empyrean</h1>
		</div>

		<ul class="center icons">
			<li>
				<a href="https://github.com/ImmaculateEmpyrean">
					<span
						class="iconify"
						data-inline="false"
						data-icon="akar-icons:github-fill"
					>
					</span>
				</a>
			</li>
			<li>
				<a href="https://discordapp.com/users/empyrean#4242/">
					<span
						class="iconify"
						data-inline="false"
						data-icon="ph:discord-logo-light"
					></span>
				</a>
			</li>
			<li>
				<a href="#" @click="routeToLeaveMessageHerePage">
				<span
					class="iconify"
					data-inline="false"
					data-icon="bx:bxl-firefox"
				></span>
				</a>
			</li>
			<li v-show="showLinkedInIcon">
				<a href="https://www.linkedin.com/in/veeru-empyrean-9987b921a/">
					<span
						class="iconify"
						data-inline="false"
						data-icon="akar-icons:linkedin-fill"
					></span>
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/veeru-empyrean-9987b921a/"
					class="subtitle"
					>LinkedIn</a
				>
			</li>
		</ul>

		<svg
			class="right hamburger-menu"
			@click="hamburgerIconClicked"
			width="50"
			height="34"
			viewBox="0 0 50 34"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect
				class="hamburger-bar-one"
				width="50"
				height="3.334"
				rx="1.667"
				fill="black"
			/>
			<rect
				class="hamburger-bar-two"
				y="15.0031"
				width="50"
				height="3.334"
				rx="1.667"
				fill="black"
			/>
			<rect
				class="hamburger-bar-three"
				y="30.006"
				width="50"
				height="3.334"
				rx="1.667"
				fill="black"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: "Navbar",
	methods: {
		hamburgerIconClicked() {
			this.$el.classList.toggle("color-inverted");
			this.$emit("hamburgerButtonClicked");
		},
		routeToLeaveMessageHerePage(e){
			e.preventDefault();
			
			this.$emit('setTransitionZoom');
			this.$router.push('/LeaveMessageHere');
		}
	},
	computed: {
		showLinkedInIcon: function() {
			if (window.innerWidth < 768) {
				return true;
			} else return false;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../assets/sass/_text.scss";
@import "../assets/sass/_settings.scss";

@import "../assets/sass/_navbar.scss";

.nav-bar {
	transition: color 2s, background-color 2s;
	flex: 1 1 5%;

	display: flex;
	justify-content: space-between;
	margin: $spacing-small;

	position: relative;
	z-index: 3;
}

.left {
	display: flex;
	align-items: center;
	column-gap: $spacing-normal;

	img {
		@extend .main-logo;
	}
	h1 {
		transition: 2s color;
		color: black;
	}
}

.center {
	display: flex;
	align-items: center;
	transition: color 2s;

	column-gap: $spacing-small;
	font-size: 30px;

	color: black;
	a {
		transition: color 2s;
		color: black;
	}

	@include atleast-tablet {
		margin-left: auto;
		margin-right: $spacing-normal;
	}
}

.right {
	display: flex;
	margin-top: auto;
	margin-bottom: auto;

	cursor: pointer;

	.hamburger-bar-one {
		transition: fill 2s, transform 2s;
		fill: black;
	}
	.hamburger-bar-two {
		transition: fill 2s, transform 2s;
		fill: black;
	}
	.hamburger-bar-three {
		transition: fill 2s, transform 2s, transform-origin 2s;
		fill: black;
	}
}
</style>

<style lang="scss" scoped>
.nav-bar.color-inverted {
	color: white;
	background: black;

	.left {
		h1 {
			color: white;
		}
	}

	.center {
		color: white;
		a {
			color: white;
		}
	}

	.right {
		.hamburger-bar-one {
			transform: rotateZ(45deg);
			fill: white;
		}
		.hamburger-bar-two {
			transform: translateX(20vw);
			fill: white;
		}
		.hamburger-bar-three {
			transform-origin: left bottom;
			transform: rotateZ(-45deg);

			fill: white;
		}
	}
}
</style>
