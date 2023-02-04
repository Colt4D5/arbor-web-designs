let intersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	const options = {
    root: null,
    threshold: 0.75,
    rootMargin: '0px 0px -150px 0px'
	}

  intersectionObserver = new IntersectionObserver(
		(entries, o) => {
			console.log(o)
			entries.forEach(entry => {
				const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));
			});
		},
		options
	);
}

export default function viewport(element) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}