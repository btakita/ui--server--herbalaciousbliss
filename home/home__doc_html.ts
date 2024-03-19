import { class_ } from 'ctx-core/html'
import { article_, div_, main_ } from 'relementjs/html'
import { type request_ctx_T, request_url_ } from 'relysjs/server'
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
				home__main_(),
				site__footer_({ ctx })
			])
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
				error
					? div_({
						class: class_(
							'w-full',
							'py-2',
							'px-7',
							'bg-red-600',
							'text-white'),
					}, error)
					: undefined,
				article_([
					'[Page Content Here]'
				]),
			])
		)
	}
}
