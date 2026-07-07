<script>
	import ProjectCard from "./ProjectCard.svelte";
</script>

<div id="work">
	<div class="topic-container fade-in delay-1" style="display: block;">
		<div>
			<h2 class="padded-title">Projects & roles</h2>
			<div class="work-projects-container fade-in-text delay-2">
				<ProjectCard
					title="Employee Experience"
					date="2026"
					description="Worked as lead developer, architect & Scrum Master. Created an
						inhouse tool for upkeeping talents skills,
						certifications and CVs. Included also data analytics for
						managers to monitor their employees career growth &
						experience."
					tags="React,TypeScript,Azure Functions,Azure,DevOps,Scrum"
				/>
				<ProjectCard
					title="Material Master Suite"
					date="2025"
					description="Worked as lead developer,
						architect & Scrum Master. Created a SaaS product 
                        for creating material in SAP with more ease to upkeep master data.
                        Product was released to SAP Industry Store."
					tags="SAPUI5,SAP CAP,SAP Fiori,SAP BTP,DevOps,Scrum"
				/>
				<ProjectCard
					title="RCA - product"
					date="2024"
					description="Worked as full-stack developer with React + AWS Lamda + MySQL stack 
                        and planned AWS architecture. Created a product for
						client. Main focus on this project was to make it
						dynamical to fit client's customers needs. Docker was
						used for AWS Lambdas + Databases in local development."
					tags="React,AWS,AWS Lambda,Docker,MySQL,DevOps"
				/>
				<ProjectCard
					title="Steelfinder"
					date="2023"
					description="Worked as Azure architect, API developer & Mendix developer. 
                        Client wanted a product where anyone interested in buying steel can find their
						catalog, check their chemical compositions & corrosion
						data."
					tags="NodeJS,PSQL,Azure,Docker,Mendix,DevOps"
				/>
				<ProjectCard
					title="RCA 24/7"
					date="2021"
					description="Worked as full-stack developer for Root Cause Analysis tool.
                        Tool is heavily used by the customer daily, in multiple countries."
					tags="React,Java,MySQL,Azure,DevOps"
				/>
				<ProjectCard
					title="SAP CF environment"
					date="2020"
					description="Created SAP BTP Cloud Foundry environments for
						development, test & production use. Configured all necessary
						services and migrated first applications from NEO cloud."
					tags="SAP BTP,Cloud Foundry"
				/>
				<ProjectCard
					title="Loading Cockpit"
					date="2020"
					description="Worked as front-end developer. Created an
						application that was used by warehouse workers to manage
						their outbound data. Made integrations to 3rd party API,
						which was used for RFID scanning."
					tags="SAPUI5,SAP Fiori,SAP BTP"
				/>
				<ProjectCard
					title="Assembly planner tool"
					date="2019"
					description="Worked as front-end developer. Created an application
                        that was used for planning tasks in shipbuilding industry"
					tags="SAPUI5,SAP Firoi,SAP BTP"
				/>
				<ProjectCard
					title="PIRA -service"
					date="2018"
					description="Worked as full-stack developer Developed an 
                        application was used to create risk assesments for
                        small / medium sized companies in Finland by Finnish
						Institute of Occupational Health"
					tags="JS,Vue,NodeJs,Java,PSQL,Docker,DevOps,Scrum"
				/>
			</div>
		</div>
	</div>
	<div class="topic-container fade-in delay-1" style="display: block;">
		<div>
			<h2 class="padded-title">Technologies & tools</h2>
			<div class="technologies-container fade-in-text delay-2">
				<div class="technology-container">
					<img
						src="images/technologies/javascript.png"
						alt="javascript.png"
					/>
					<p>JavaScript</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/html5.png" alt="html5.png" />
					<p>HTML5</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/css.png" alt="css.png" />
					<p>CSS</p>
				</div>
				<div class="technology-container">
					<img
						src="images/technologies/typescript.png"
						alt="typescript.png"
					/>
					<p>TypeScript</p>
				</div>
				<div class="technology-container">
					<img
						src="images/technologies/nodejs.png"
						alt="nodejs.png"
					/>
					<p>NodeJS</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/java.png" alt="java.png" />
					<p>Java</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/ui5.png" alt="ui5.png" />
					<p>SAP UI5</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/cap.png" alt="cap.png" />
					<p>SAP CAP</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/mysql.png" alt="mysql.png" />
					<p>MySQL</p>
				</div>
				<div class="technology-container">
					<img
						src="images/technologies/postgresql.png"
						alt="postgresql.png"
					/>
					<p>PSQL</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/react.png" alt="react.png" />
					<p>React</p>
				</div>
				<div class="technology-container">
					<img
						src="images/technologies/docker.png"
						alt="docker.png"
					/>
					<p>Docker</p>
				</div>
				<div class="technology-container">
					<img
						src="images/technologies/python.png"
						alt="python.png"
					/>
					<p>Python</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/bash.png" alt="bash.png" />
					<p>Bash</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/git.png" alt="git.png" />
					<p>Git</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/btp.png" alt="btp.png" />
					<p>SAP BTP</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/aws.png" alt="aws.png" />
					<p>AWS</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/azure.png" alt="azure.png" />
					<p>Azure</p>
				</div>
				<div class="technology-container">
					<img
						src="images/technologies/svelte.png"
						alt="svelte.png"
					/>
					<p>Svelte</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/vue.png" alt="vue.png" />
					<p>Vue</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/godot.png" alt="godot.png" />
					<p>Godot</p>
				</div>
				<div class="technology-container">
					<img src="images/technologies/rust.png" alt="rust.png" />
					<p>Rust</p>
				</div>
			</div>
		</div>
	</div>
</div>
