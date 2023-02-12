<script>
	import '@picocss/pico/css/pico.min.css'
	import '$css/fonts.postcss'
	import '$css/app.postcss'
	import '$css/vars.postcss'
	import '$css/utilities.postcss'
	import Header from '$components/Header.svelte'
	import Footer from '$lib/components/Footer.svelte'
	import OffcanvasNav from '$lib/components/OffcanvasNav.svelte'
	import ToTopBtn from '../lib/components/ToTopBtn.svelte'

	import { onMount } from 'svelte'

	onMount(() => {
		const themeToggle = document.querySelector('input.toggle');

		// set theme cookie
		function checkCookie(cname, exdays) {
			var cvalue = getCookie(cname);
			// checking whether user is null or not
			if (cvalue === "") {
				const isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
				setCookie(cname, 'dark', exdays);
			}
		}
		checkCookie('theme', 30);

		function setCookie(cname, cvalue, exdays) {
			const d = new Date();
			d.setTime(d.getTime() + (exdays*24*60*60*1000));
			let expires = "expires="+ d.toUTCString();
			document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		}

		function getCookie(cname) {
			let name = cname + "=";
			let decodedCookie = decodeURIComponent(document.cookie);
			let ca = decodedCookie.split(';');
			for(let i = 0; i <ca.length; i++) {
				let c = ca[i];
				while (c.charAt(0) == ' ') {
					c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
				}
			}
			return "";
		}

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
			const newColorScheme = event.matches ? "dark" : "light";
			document.querySelector('html').dataset.theme = newColorScheme;
			themeToggle.checked = newColorScheme === "dark" ? false : true;
			// setCookie('theme', newColorScheme, 30);
		});

		themeToggle.addEventListener('change', e => {
			document.querySelector('html').dataset.theme = e.target.checked ? 'light' : 'dark';
			// setCookie('theme', document.querySelector('html').dataset.theme, 30);
		})
	});

</script>

<Header />
<main id="main">
	<slot />
</main>
<Footer />
<OffcanvasNav />
<ToTopBtn />
