import { class_ } from 'ctx-core/html'
import { type tag_T } from 'relementjs'
import { footer_ } from 'relementjs/html'
export function site__footer_({
	class: _class,
	icon_class,
}:{
	class?:string
	icon_class?:string
}) {
	icon_class = class_(
		'fill-gray-900',
		'h-6',
		'w-6',
		'fill-white',
		icon_class)
	return (
		footer_({
			id: 'site__footer',
			class: class_(
				'fixed',
				'bottom-0',
				'z-10',
				'h-8',
				'w-screen',
				'py-1',
				'bg-cyan-600/90',
				_class)
		}, [
		])
	)
}
type social_aa = [href:string, icon_:tag_T][]
