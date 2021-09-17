<template>
	<div class="projectCard-wrapper card hoverable">
		<div class="left">
			<div class="card left-card">
				<div class="card-image ">
					<img class="materialboxed" :src="projectImage" />
				</div>
				<div class="card-content">
					<span class="card-title activator grey-text text-darken-4">
						{{ projectTitle }}
					</span>
					<p>
						<slot name="projectDescription"> </slot>
					</p>
					<br />
					<span class="card-title grey-text text-darken-4">Skills Used - </span>
					<div class="skills-used">
						<ul>
							<slot name="listSkillsLeft"></slot>
						</ul>
						<ul>
							<slot name="listSkillsRight"></slot>
						</ul>
					</div>
				</div>
				<div class="card-action">
					<a :href="projectLiveVersionLink" class="link">
						<i class="fas fa-cloud"></i> View Live Version
					</a>
					<a :href="projectSourceLink" class="link">
						<i class="fas fa-code-branch"></i> View Source Code</a
					>
				</div>
			</div>
		</div>

		<div class="right">
			<div class="myRole card">
				<div class="card-content">
					<span class="card-title">My Role</span>
					<slot name="myRole"></slot>
				</div>
			</div>
			<div class="projectDifficulties card">
				<div class="card-content">
					<span class="card-title">Project Difficulty</span>
					<slot name="projectDifficulties"></slot>
				</div>
			</div>
			<div class="mySolution card">
				<div class="card-content">
					<span class="card-title">My Solution</span>
					<slot name="mySolution"></slot>
				</div>
			</div>
			<div class="NotableFeatures card">
				<div class="card-content">
					<span class="card-title">Notable Features</span>
					<slot name="notableFeatures"></slot>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProjectCard",
	props: {
		projectImage: {
			type: String,
			default: "https://wallpapercave.com/wp/wp4664192.png",
		},
		projectTitle: {
			type: String,
			default: "Title",
		},
		projectLiveVersionLink: {
			type: String,
			default: "https://www.google.com",
		},
		projectSourceLink: {
			type: String,
			default: "https://www.google.com",
		},
	},
	mounted() {
		$(".materialboxed").materialbox();
	},
};
</script>

<style lang="scss" scoped>
$primary-color: #e12a2a;
@import "@/assets/sass/_settings.scss";
@import "materialize-css/sass/materialize.scss";

.projectCard-wrapper {
	padding: $spacing-normal;

	display: flex;
	column-gap: $spacing-normal;
}
.left {
	flex: 1 1 40%;

	display: flex;
	flex-direction: column;
	justify-content: center;
}
.right {
	flex: 1 1 60%;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.skills-used {
	display: flex;
	justify-content: space-between;
	width: 60%;
}
.card-action {
	display: flex;
	justify-content: space-between;

	* {
		margin: 0 !important;
	}
}
.link {
	color: #e12a2a !important;
}
</style>
