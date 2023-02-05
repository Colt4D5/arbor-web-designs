let intersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	const options = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px -200px 0px'
	}

  intersectionObserver = new IntersectionObserver(
		(entries, o) => {
			entries.forEach(entry => {
				const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
				entry.target.dispatchEvent(new CustomEvent(eventName));
				if (entry.isIntersecting) {
					o.unobserve(entry.target)
				}
			});
		},
		options
	);
}

export default function useObserverAction(element) {
	ensureIntersectionObserver();
	
	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}