import { class_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { header_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
export function site__header_({
	title,
	class:_class
}:{
	ctx:request_ctx_T
	title?:string
	class?:string
}, ...children:tag_dom_T[]) {
	return (
		header_({
			class: class_(
				'site__header',
				_class)
		}, [
			...children
		])
	)
}
