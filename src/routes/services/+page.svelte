<script>
	import Headerimage from "$components/Headerimage.svelte"
	// import bgImage from '$assets/img/contact-header.webp'
	import SmallForm from "../../lib/components/about/SmallForm.svelte";
	import introSVG from '$assets/svg/web-development.svg';
	import designSVG from '$assets/svg/web-design.svg';
	import developmentSVG from '$assets/svg/development.svg';
	import rocketSVG from '$assets/svg/rocket.svg';
</script>

<svelte:head>
  <title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>
</svelte:head>

<Headerimage header="https://res.cloudinary.com/dgo7sqipz/image/upload/v1704246843/rainforest_rjslfs.webp" alignment="left 45% center" overlay="background-color: rgb(0 0 0 / 0.5); width: 100%; height: 100%;" />

<section id="services">
	<div class="container">
		<h1><theme-color>Arbor's</theme-color> services</h1>
		
		<h2>website design & development that thrives</h2>
		<div id="intro-copy" class="grid">
			<div class="copy">
				<p>At <theme-color>Arbor Web Design</theme-color>, we believe in building websites from scratch, using the latest web technologies and design trends. We don't rely on site builders like WordPress, Wix, Squarespace, or others, which can be limiting in terms of design flexibility and website performance.</p>
				<p>Our team of experienced developers and designers work closely with you to understand your business needs and objectives in order to build the perfect website that reflects your unique brand identity. We use the latest web technologies and programming languages to create a custom website that is tailored to your specific requirements, and designed to perform optimally across all devices and platforms.</p>
				<p>With our custom-built websites, you'll enjoy a website that is both visually stunning and functional, with all the features and functionalities you need to grow your business online. Plus, with our team's expertise, you can trust that your website is built to the highest standards of quality, security, and performance.</p>
			</div>
			<div class="image">
				<img src={ introSVG } alt="Website Development" />
			</div>
		</div>
		
		<div class="service-items">
			<article class="item">
				<div class="grid">
					<div class="copy">
						<h3><theme-color>custom-coded</theme-color> websites built from scratch</h3>
						<p>Our subscription model offers a stress-free solution with updates, security checks, and backups included - all at a budget-friendly price. Focus on growing your business and leave the website management to us!</p>
						<ul>
							<li>Customizable: Unique designs that match your brand</li>
							<li>Flexible: Custom functionality to meet your needs</li>
							<li>Quality: Hand-built to ensure quality in every step</li>
						</ul>
		
					</div>
					<div class="image">
						<img src={ developmentSVG } alt="Custom-Built Websites" />
					</div>
				</div>
			</article>
	
			<article class="item">
				<div class="grid">
					<div class="copy">
						<h3><theme-color>affordable</theme-color> subscription model</h3>
						<p>Our subscription model offers a stress-free solution with updates, security checks, and backups included - all at a budget-friendly price. Focus on growing your business and leave the website management to us!</p>
					</div>
					<div class="image">
						<img src={ rocketSVG } alt="Affordable Subscription Plan" />
					</div>
				</div>
			</article>
	
			<article class="item">
				<div class="grid">
					<div class="copy">
						<h3>visually stunning <theme-color>website design</theme-color></h3>
						<p>Make a lasting impression with our stunning and eye-catching website designs. Our team of designers will create a unique and professional website that captures the essence of your brand and engages your visitors. With our beautiful designs, your website will be a true reflection of your business and set you apart from the competition.</p>
						<ul>
							<li>Visual Appeal: Beautiful design to attract customers</li>
							<li>User Experience: Easily navigate your site</li>
							<li>Fully Responsive: Scalable for any device size</li>
						</ul>
					</div>
					<div class="image">
						<img src={ designSVG } alt="Beautiful Website Designs" />
					</div>
				</div>
			</article>
		</div>

  </div>
</section>

<section id="form">
	<SmallForm />
</section>

<style lang="postcss">
	#services {
		/* --padding: 20vw; */
		& .grid {
			display: flex;
			flex-direction: column-reverse;
			@media (min-width: 40em) {
				flex-direction: row;
			}
			& .copy {
				grid-column: 1;
			}
			& .image {
				grid-column: 2;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				width: 100%;
				margin-bottom: 1rem;
				@media (min-width: 40em) {
					margin-bottom: 0;
				}
				&::before {
					content: '';
					position: absolute;
					left: 50%;
					top: 0%;
					width: 100px;
					aspect-ratio: 202 / 221;
					transform: translate(0.5rem, -50%);
					background-image: url(../../lib/assets/svg/bg-leaves.svg);
					background-size: cover;
					z-index: -1;
					opacity: 0.2;
					@media (min-width: 40em) {
						left: 50%;
						top: 40%;
						transform: translate(0, -50%);
						width: 300px;
					}
				}
				& img {
					width: 60px;
					@media (min-width: 40em) {
						width: min(80%, 250px);
					}
				}
			}
		}
		& .service-items {
			/* margin-top: 4rem; */
			& .item {
				background-color: transparent;
				box-shadow: none;
				margin-bottom: 3rem;
				padding-inline: 0;
				&:nth-child(2n) {
					@media (min-width: 40em) {
						& .grid {
							flex-direction: row-reverse;
							align-items: center;
							& .copy {
								grid-column: 2;
							}
							& .image {
								grid-column: 1;
							}
						}
					}
				}
				& h2 {
					font-size: clamp(1.2rem, 4vw, 1.5rem);
					font-weight: 400;
				}
			}
		}
		& #intro-copy {
			margin-bottom: 4rem;
			& .image {
				display: none;
				@media (min-width: 40em) {
					display: flex;
				}
			}
		}
	}
</style>
