<template>
	<div class="Portfolio-Detail">
		<div class="container">
			<!-- About -->
			<section class="section" id="about">
				<!-- Title -->
				<div class="section-heading">
					<h3 class="title is-2">About Me</h3>
					<h4 class="subtitle is-5">
						I am very good at instructing computers to do my job for me.
					</h4>

					<p class="pb-3">
						Web developer with more than <strong>2 years</strong> of
						well-rounded experience with a degree in the field of
						<strong>Computer Science</strong>, extensive knowledge of modern Web
						techniques and love for <strong>JavaScript</strong>. Looking for an
						opportunity to work and upgrade, as well as being involved in an
						organization that believes in gaining a competitive edge.
					</p>
					<p class="pb-3">
						Passion for video games has driven me to
						<strong>publish games on the app store</strong> while also writing
						my own <strong>video game engine.</strong>
					</p>
				</div>

				<div class="columns is-gapless">
					<div class="column is-two-thirds">
						<!-- Profile -->
						<div class="card" style="min-height: 100%">
							<div class="card-content">
								<h3 class="title is-4">Profile</h3>

								<div class="content">
									<table class="table-profile">
										<tr>
											<th colspan="1"></th>
											<th colspan="2"></th>
										</tr>
										<tr>
											<td>Education :</td>
											<td>Bachelor of Technology</td>
										</tr>
										<tr>
											<td>Specialization :</td>
											<td>Information Technology</td>
										</tr>
										<tr>
											<td>Expertise In :</td>
											<td>
												<span class="tag is-link mr-2">Web Programming</span>
												<span class="tag is-link">Video Game Programming</span>
											</td>
										</tr>
										<tr>
											<td>Experience :</td>
											<td>
												<span class="tag is-link mr-2"
													>Commercial Grade FullStack WebApps</span
												>
												<span class="tag is-link">Published Video Games</span>
											</td>
										</tr>
									</table>
								</div>
								<br />
								<div class="buttons has-addons is-centered">
									<a href="https://github.com/ImmaculateEmpyrean" class="button is-link mr-1">Github</a>
									<a href="https://www.linkedin.com/in/veeru-empyrean-9987b921a/" class="button is-link mr-1">LinkedIn</a>
									<a href="https://discordapp.com/users/empyrean#4242/" class="button is-link mr-1">Discord</a>
									<a href="#" class="button is-link mr-1" @click="routeToLeaveMessageHerePage" >Email</a>
								</div>
							</div>
						</div>
					</div>

					<div class="column is-one-third">
						<!-- Skills -->
						<div class="box" id="skillBoxesCard" style="min-height: 100%">
							<h3 class="title is-4">Core Skills</h3>
							<div class="skill-box-container">
								<div class="left">
									<SkillBox title="Vue3" :iconSrc="require('@/assets/Vue3-logo.svg')"/>
									<SkillBox title="Databases" :iconSrc="require('@/assets/DB-logo.svg')"/>
									<SkillBox title="Node.js" :iconSrc="require('@/assets/NodeJs-logo.svg')"/>
								</div>
								<div class="right">
									<SkillBox title="C++" :iconSrc="require('@/assets/Cpp-logo.svg')"/>
									<SkillBox title="Godot" :iconSrc="require('@/assets/Godot-logo.svg')"/>
									<SkillBox title="UE4" :iconSrc="require('@/assets/UE4-logo.svg')"/>
								</div>
							</div>
						</div>

					</div>
				</div>

				<div class="box">
					<p class="subtitle is-4">Technologies I use on a daily basis</p>
					<div class="tags custom-tags">
						<span class="tag is-link">HTML5</span>
						<span class="tag is-link">CSS3</span>
						<span class="tag is-link">JavaScript</span>
						<span class="tag is-link mr-3">SASS/SCSS</span>
						<span class="tag is-link">Node.js</span>
						<span class="tag is-link">Express.js</span>
						<span class="tag is-link">VueJS</span>
						<span class="tag is-link">Bulma</span>
						<span class="tag is-link">Bootstrap</span>
						<span class="tag is-link">jQuery</span>
						<span class="tag is-link">ASP.NET Blazor</span>
						<span class="tag is-link">Postgress</span>
						<span class="tag is-link">MongoDB</span>
						<span class="tag is-link">Webpack</span>
						<span class="tag is-link">Git</span>
					</div>
				</div>
			</section>

			<!-- Services -->
			<section class="section" id="services">
				<div class="section-heading pb-4">
					<h3 class="title is-2">Services</h3>
					<h4 class="subtitle is-5">What Can I Do For You?</h4>
				</div>

				<div class="container">
					<div class="columns">
						<div class="column">
							<div class="box" style="min-height: 100%">
								<div class="content">
									<h4 class="title is-5">Front End Web Development</h4>
									I Develop Front Ends using Vue.js coupled with HTML5, CSS3 and
									a healthy dose of different JavaScript NPM libraries.
								</div>
							</div>
						</div>
						<div class="column">
							<div class="box" style="min-height: 100%">
								<div class="content">
									<h4 class="title is-5">Back End Web Development</h4>
									I primarily develop Back End applications using Node.js and express or ASP.NET, The sky is really the limit here as I have excellent augmentations like postgress and Mongo DB databases in my arsenal.
								</div>
							</div>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<div class="box" style="min-height: 100%">
								<div class="content">
									<h4 class="title is-5">Video Game Development</h4>
									Being fairly well versed in godot 3 puts me in a good position to move into game development at will and I intend to make full use of this position in your service. 
								</div>
							</div>
						</div>
						<div class="column">
							<div class="box" style="min-height: 100%">
								<div class="content">
									<h4 class="title is-5">Wordpress Development</h4>
									Any of my plugins pique your intrest? Or would you rather hire
									me to develop a wordpress site for you.
								</div>
							</div>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<div class="box" style="min-height: 100%">
								<div class="content">
									<h4 class="title is-5">Server Administration</h4>
									I maintain my own debian based server and am quite adept at doing that. I can do it for you too if you hire me!
								</div>
							</div>
						</div>
						<div class="column">
							<div class="box" style="min-height: 100%">
								<div class="content">
									<h4 class="title is-5">Database Designer</h4>
									Being well versed in the song that is Database (relational databases), I can help you either overhaul an existing system or design and implement entirely new ones to support your backEnd. 
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<!-- Portfolio -->
			<section class="section" id="portfolio">
				<div class="section-heading">
					<h3 class="title is-2" id="myProjectsHeading">My Projects</h3>
					<h4 class="subtitle is-5">Have A Look At What I Have Already Done Before You Choose To Hire Me!</h4>
					<ProjectsShowcase />	
				</div>
			</section>

			<!-- Resume -->
			<section class="section" id="resume">
				<div class="section-heading">
					<h3 class="title is-2">Resume</h3>
					<h4 class="subtitle is-5">More about my past.</h4>
					<a href="#" @click="downloadResume" class="button is-link is-medium">
						<span class="icon">
							<i class="fas fa-file-alt"></i>
						</span>
						<span>Download My Resume</span>
					</a>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
import JsFileDownloader from 'js-file-downloader';
import ProjectsShowcase from '@/components/portfolio-detail/ProjectsShowcase.vue';

import SkillBox from './SkillBox.vue';

export default {
	name: "PortfolioDetail",
	components:{
		ProjectsShowcase,
		SkillBox
	},
	methods:{
		routeToLeaveMessageHerePage(e){
			e.preventDefault();

			this.$emit("setTransitionZoom");
			this.$router.push("/LeaveMessageHere");
		},
		async downloadResume(){
			new JsFileDownloader({ 
    			url: '/download-resume'
  			}).then(function(){
				  console.log('download done ?')
			}).catch(function(error){
				console.log(error);
			});
		}
	}
}
</script>


<style lang="scss" scoped>
//customizing bulma
@import "bulma/sass/utilities/initial-variables";
@import "bulma/sass/utilities/functions";
@import "../../assets/sass/_settings.scss";

$link: #e12a2a;

@import "bulma/bulma.sass";

//my styling

.tri-cards {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

//used in columns to align something to the end of said column
.align-flex-end {
	align-self: flex-end;
}

.image-circular {
	border-radius: 50%;
}

#skillBoxesCard{
	height: 100%;
	.skill-box-container{
		display: flex;
		flex-direction: column;
		height: 100%;

		@include atleast-tablet{
			flex-direction: row;
			justify-content: space-around;
		}
		@include atleast-desktop{
			justify-content: space-between;
		}

		.left{
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			row-gap: $spacing-small;
			margin-bottom: $spacing-small;
		
			height: 85%;
		}
		.right{
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			row-gap: $spacing-small;

			height: 85%;
		}
	}
}
</style>
