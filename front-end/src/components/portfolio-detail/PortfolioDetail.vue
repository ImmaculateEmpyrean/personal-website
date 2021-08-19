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
						<div class="box" style="min-height: 100%">
							<h3 class="title is-4">Skills</h3>
							<div>
								<strong>JavaScript</strong>
								<progress
									class="progress is-link"
									value="100"
									max="100"
								></progress>
							</div>
							<div>
								<strong>Vue.js</strong>
								<progress
									class="progress is-link"
									value="80"
									max="100"
								></progress>
							</div>
							<div>
								<strong>Node.js</strong>
								<progress
									class="progress is-link"
									value="80"
									max="100"
								></progress>
							</div>
							<div class="pb-4">
								<strong>Bulma</strong>
								<progress
									class="progress is-link"
									value="95"
									max="100"
								></progress>
							</div>

							<div>
								<strong>C++</strong>
								<progress
									class="progress is-link"
									value="100"
									max="100"
								></progress>
							</div>
							<div>
								<strong>Godot</strong>
								<progress
									class="progress is-link"
									value="75"
									max="100"
								></progress>
							</div>
							<div class="pb-4">
								<strong>Unreal Engine 4</strong>
								<progress
									class="progress is-link"
									value="65"
									max="100"
								></progress>
							</div>
							<div>
								<strong>Databases</strong>
								<progress
									class="progress is-link"
									value="100"
									max="100"
								></progress>
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
									Develop Back End application/service using Node.js or ASP .NET
									and SQL server or Mongo DB databases.
								</div>
							</div>
						</div>
					</div>

					<div class="columns">
						<div class="column">
							<div class="box" style="min-height: 100%">
								<div class="content">
									<h4 class="title is-5">Video Game Development</h4>
									Develop Video Games using latest technologies like godot or
									unreal engine.
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

			<!-- Portfolio -->
			<section class="section" id="portfolio"></section>
		</div>
	</div>
</template>

<script>
import JsFileDownloader from 'js-file-downloader';

export default {
	name: "PortfolioDetail",
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
</style>
