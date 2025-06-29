export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","mstile-150x150.png","og-arbor-web.jpg","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"text/xml",".jpg":"image/jpeg",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		client: {start:"_app/immutable/entry/start.BA9MiRxU.js",app:"_app/immutable/entry/app.CqQ9lKUT.js",imports:["_app/immutable/entry/start.BA9MiRxU.js","_app/immutable/chunks/CwQAagSc.js","_app/immutable/chunks/BzAk2lqo.js","_app/immutable/chunks/CAcJI45W.js","_app/immutable/entry/app.CqQ9lKUT.js","_app/immutable/chunks/BzAk2lqo.js","_app/immutable/chunks/C86X3-rB.js","_app/immutable/chunks/Cw7BOSTy.js","_app/immutable/chunks/CAcJI45W.js","_app/immutable/chunks/BPeg6XjU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about-arbor",
				pattern: /^\/about-arbor\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/api/posts",
				pattern: /^\/api\/posts\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/posts/_server.js'))
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
