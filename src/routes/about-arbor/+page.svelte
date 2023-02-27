<script>
	import Headerimage from "$components/Headerimage.svelte"
	// import bgImage from '$assets/img/contact-header.webp'
	import SmallForm from "../../lib/components/about/SmallForm.svelte";
</script>

<svelte:head>
  <title>Arbor Web Designs | Contact Us | Moreno Valley, CA</title>
</svelte:head>

<Headerimage header="https://res.cloudinary.com/dgo7sqipz/image/upload/v1675582419/Arbor%20Web%20Designs/contact-header_bwyrny.webp" alignment="left 45% center" overlay="background-color: rgb(0 0 0 / 0.65); width: 100%; height: 100%;" />

<section id="about">
	<div class="container">

		<div class="top">
			<div class="left">
				<h1>about <theme-color>Arbor</theme-color></h1>

				<p>Having a website in today's technological climate is no longer a luxury but a necessity. That's why we've created a solution that takes care of all your website needs, so you can focus on growing your business. Our team of expert designers and developers will work closely with you to bring your vision to life and keep it up to date with the latest design trends and modern technological advancements.</p>

				<p><theme-color>Arbor Web Design</theme-color> is revolutionizing the way businesses approach their online presence. Our innovative subscription model offers a hassle-free and cost-effective solution for companies looking to bring in new customers who were once out of reach.</p>
			
				<p>Our subscription model includes:</p>
				<ul>
					<li>Custom website design and development</li>
					<li>Ongoing website maintenance and updates</li>
					<li>24/7 support and problem resolution</li>
					<li>Regular website performance optimization</li>
				</ul>
			
				<p>With our subscription model, you can enjoy peace of mind and focus on what's important to your business, knowing that your website is in good hands. No more worrying about unexpected expenses or falling behind on the latest website design trends.
				Let us help you bring your online presence to the next level. Contact us today to learn more about our innovative subscription model and how it can benefit your business.</p>
			</div>
			<div class="right"></div>
		</div>
	
	</div>
</section>

<SmallForm />

<style lang="postcss">
	section#about {
		& .top {
			display: flex;
			flex-direction: column;
			@media (width >= 40em) {
				flex-direction: row;
			}
			& .left {
				flex: 2;
			}
			& .right {
				flex: 1;
			}
		}
		& p:has( + ul) {
			margin-bottom: 0;
		}
		& ul {
		padding-left: 2rem;
			& li {
				list-style-image: url(../../lib/assets/svg/bg-leaves.svg);
				padding-left: 0.5rem;
				line-height: 1;
				&::marker {
					font-size: 2rem;
				}
			}
		}
	}
</style>