import { class_ } from 'ctx-core/html'
import { footer_ } from 'relementjs/html'
export function site__footer_({
	class: _class,
}:{
	class?:string
}) {
	return (
		footer_({
			id: 'site__footer',
			class: class_(_class)
		}, [
		])
	)
}
