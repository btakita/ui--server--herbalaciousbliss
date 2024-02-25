import { import_meta_env_ } from 'ctx-core/env'
import { class_ } from 'ctx-core/html'
import { raw_, type tag_dom_T } from 'relementjs'
import { type tag_props_T } from 'relementjs/any'
import { body_, head_, link_, meta_, script_, title_ } from 'relementjs/html'
import { doc_html_ } from 'relementjs/server'
import { assets_, assets__new, type assets_T, type request_ctx_T, request_url_ } from 'relysjs/server'
import herbaliciousbliss_logo_webp from '../public/asset/image/herbaliciousbliss-logo.webp'
const google_site_verification = import_meta_env_().PUBLIC_GOOGLE_SITE_VERIFICATION
export function layout__doc_html_({
	ctx,
	html_props,
	body__props,
	assets,
	canonical_url,
	title,
	author,
	description,
	og_image,
}:{
	ctx:request_ctx_T
	html_props?:tag_props_T&{ class?:string }
	body__props?:tag_props_T&{ class?:string }
	assets?:assets_T
	canonical_url?:string
	title?:string
	author?:string
	description?:string
	og_image?:string
}, ...children:tag_dom_T[]) {
	canonical_url ??= request_url_(ctx).href
	title ??= 'Herbalicious Bliss'
	description ??= 'Find your Herbal Bliss'
	author ??= 'Herbalicious Bliss'
	og_image ??= herbaliciousbliss_logo_webp
	const social_image_url = new URL(og_image, request_url_(ctx).origin).href
	assets = assets__new(assets_(ctx), assets)
	return (
		doc_html_({
			...html_props,
			class: class_(
				'doc__html',
				'noscript',
				html_props?.class)
		}, [
			head_([
				// language=js
				script_(raw_('document.documentElement.classList.remove("noscript")')),
				meta_({ charset: 'UTF-8' }),
				meta_({ name: 'viewport', content: 'width=device-width' }),
				meta_({ name: 'title', content: title }),
				meta_({ name: 'description', content: description }),
				meta_({ name: 'author', content: author }),
				//  Open Graph / Facebook
				meta_({ property: 'og:title', content: title }),
				meta_({ property: 'og:description', content: description }),
				meta_({ property: 'og:url', content: canonical_url }),
				meta_({ property: 'og:image', content: social_image_url }),
				// Twitter
				meta_({ property: 'twitter:card', content: 'summary_large_image' }),
				meta_({ property: 'twitter:url', content: canonical_url }),
				meta_({ property: 'twitter:title', content: title }),
				meta_({ property: 'twitter:description', content: description }),
				meta_({ property: 'twitter:image', content: social_image_url }),
				meta_({ name: 'darkreader', content: 'disable' }),
				// Google Font
				meta_({ rel: 'preconnect', href: 'https://fonts.googleapis.com' }),
				meta_({ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 1 }),
				meta_({
					href: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600;700&display=swap',
					rel: 'stylesheet'
				}),
				meta_({ name: 'theme-color', content: '' }),
				link_({ rel: 'icon', type: 'image/webp', href: herbaliciousbliss_logo_webp }),
				link_({ rel: 'canonical', href: canonical_url }),
				link_({ rel: 'sitemap', href: '/sitemap.xml' }),
				google_site_verification
				&& meta_({ name: 'google-site-verification', content: google_site_verification }),
				...assets.css_a.map(href=>
					link_({ rel: 'stylesheet', type: 'text/css', href })),
				...assets.script_a.map(src=>
					script_({ type: 'module', src })),
				// language=js
				script_(raw_(`
					// remove fouc
					const localStorage__theme = localStorage.getItem('theme')
					document.firstElementChild.setAttribute(
						'data-theme',
						localStorage__theme
							? localStorage__theme
							: window.matchMedia('(prefers-color-scheme: dark)').matches
								? 'dark'
								: 'light')
				`.trim().replaceAll('					', ''))),
				title_(title),
			]),
			body_({
				...body__props,
				class: class_(
					'bg-white',
					'dark:bg-gray-900',
					body__props?.class)
			}, [
				raw_(`
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-E2YTV44HXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-E2YTV44HXX');
</script>
				`.trim()),
				children])
		])
	)
}
