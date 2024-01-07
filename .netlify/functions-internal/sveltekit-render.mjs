import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","mstile-150x150.png","og-arbor-web.jpg","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".jpg":"image/jpeg",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {"start":"_app/immutable/entry/start.f3e0f8c6.js","app":"_app/immutable/entry/app.58e3fbfb.js","imports":["_app/immutable/entry/start.f3e0f8c6.js","_app/immutable/chunks/index.43a786c9.js","_app/immutable/chunks/singletons.c5dc2de6.js","_app/immutable/entry/app.58e3fbfb.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.43a786c9.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
