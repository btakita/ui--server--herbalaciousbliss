import { main_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_, site__footer_, site__header_ } from '../layout/index.js'
type props_T = { ctx:request_ctx_T }
export function lyra__doc_html_($p:props_T) {
	const { ctx } = $p
	return (
		layout__doc_html_({
			ctx,
			title: 'Lyra Star Mist',
		}, [
			site__header_({ ctx }),
			lyra__main_(),
			site__footer_({ ctx })
		])
	)
	function lyra__main_() {
	  return main_()
	}
}
