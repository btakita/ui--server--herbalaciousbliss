import { class_ } from 'ctx-core/html'
import { div_ } from 'relementjs/html'
type props_T = { error: string|null|undefined }
export function error__div_($p:props_T) {
  const { error } = $p
	return (
		error
			? div_({
				class: class_(
					'w-full',
					'py-2',
					'px-7',
					'bg-red-600',
					'text-white'),
			}, error)
			: undefined
	)
}
