let intersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

	let options
	
  intersectionObserver = new IntersectionObserver((entries, o) => {
		entries.forEach(entry => {
			const hasDataTransition = entry.target.dataset.transition === 'fade-up'
			options = hasDataTransition ? {
				root: null,
				threshold: 0,
				rootMargin: window.innerWidth < 640 ? '0px 0px -400px 0px' : '0px 0px -550px 0px'
			} : {
				root: null,
				threshold: 0.75,
				rootMargin: '0px 0px -200px 0px'
			}
			const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
			entry.target.dispatchEvent(new CustomEvent(eventName));
			if (entry.isIntersecting) {
				o.unobserve(entry.target)
			}
		});
	}, options);
}

export default function useObserverAction(element) {
	ensureIntersectionObserver();
	
	intersectionObserver.observe(element);

	console.log(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}



export function fadeUp(e) {
	const target = e.target
	target.classList.add('is-in-view')
}