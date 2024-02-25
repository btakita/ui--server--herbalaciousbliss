import { class_ } from 'ctx-core/html'
import { div_, section_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
export function home__doc_html_({ ctx }:{ ctx:request_ctx_T }) {
	return (
		layout__doc_html_({
			ctx,
			title: 'Herbalicious Bliss',
			html_props: {
				class: class_('home__doc_html'),
			}
		}, [
			div_({
				class: class_(),
			}, [
				site__header_({ ctx }),
				home_link__section_(),
				site__footer_({ ctx })
			])
		])
	)
	function home_link__section_() {
		return (
			section_({
				class: class_(
					'flex',
					'flex-col',
					'items-center',
					'justify-center',
					'mb-12')
			}, [])
		)
	}
}
