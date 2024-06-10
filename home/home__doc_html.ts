import { class_ } from 'ctx-core/html'
import { article_, main_ } from 'relementjs/html'
import { type request_ctx_T, request_url_ } from 'relysjs/server'
import { error__div_ } from '../error/index.js'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
type props_T = { ctx:request_ctx_T }
export function home__doc_html_($p:props_T) {
	const { ctx } = $p
	return (
		layout__doc_html_({
			ctx,
			title: 'Herbalicious Bliss',
			html_props: {
				class: class_('home__doc_html'),
			}
		}, [
			site__header_({ ctx }),
			home__main_(),
			site__footer_({ ctx })
		])
	)
	function home__main_() {
		const error = request_url_(ctx).searchParams.get('error')
		return (
			main_({
				class: class_(
					'flex',
					'flex-col',
					'items-center',
					'justify-center',
					'mb-12')
			}, [
				error__div_({ error }),
				article_([
					'[Page Content Here]'
				]),
			])
		)
	}
}
