import { class_, html_style_ } from 'ctx-core/html'
import { dd_, div_, dl_, dt_, h1_, h2_, h3_, li_, main_, p_, strong_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { layout__doc_html_ } from '../layout/index.js'
import GWA_business_card_Lyra_Star_webp from '../public/asset/image/lyra/GWA_business_card_Lyra_Star.webp'
import SparkITude_small_board_2b_webp from '../public/asset/image/lyra/SparkITude_small_board_2b.webp'
type props_T = { ctx:request_ctx_T }
export function lyra__doc_html_($p:props_T) {
	const { ctx } = $p
	return (
		layout__doc_html_({
			ctx,
			title: 'Lyra Star Mist',
		}, [
			lyra__main_(),
		])
	)
	function lyra__main_() {
	  return main_({
			class: class_(
				'h-[1200px]',
				'w-[1130px]',
				'relative',
				'grid',
				'grid-cols-5',
				'grid-rows-7',
				'grid-flow-row',
				),
		}, [
			div_({
				class: class_(
					'absolute',
					'top-0',
					'left-0',
					'bg-no-repeat',
					'w-full',
					'h-full',
					'z-0',),
				style: html_style_({
					'background-image': `url('` + SparkITude_small_board_2b_webp + `')`
				})
			}),
			div_({
				id: 'cell-l0',
				class: class_(
					'relative',
					'z-10',
					'row-start-1',
					'col-span-3',
					'row-span-3',
					'flex',
					'flex-col',)
			}, [
				div_({
					class: class_(
						'absolute',
						'top-0',
						'left-0',
						'w-full',
						'h-full',
						'bg-gradient-to-tr',
						'from-card-l0-bl',
						'to-card-l0-tr',
						'opacity-80',)
				}),
				h1_({
					class: class_(
						'flex-grow-0',
						'relative',
						'z-10',
						'block',
						'mx-auto',
						'text-3xl',
						'font-bold',
						'text-center',
						'mt-4',)
				}, 'Lyra Star Mist'),
				div_({
					class: class_(
						'flex-grow',
						'relative',
						'z-10',
						'w-full',
						'grid',
						'grid-cols-5',
						'mt-2',)
				}, [
					div_({
						class: class_(
							'col-span-2',
							'bg-center',
							'bg-contain',
							'bg-no-repeat',),
						style: html_style_({
							'background-image': `url('${GWA_business_card_Lyra_Star_webp}')`
						})
					}),
					div_({
						class: class_(
							'col-span-3',
							'text-card-indigo',)
					}, [
						h2_({
							class: class_(
								'text-2xl',
								'text-center',)
						}, 'About:'),
						dl_([
							dt_({
								class: class_('inline')
							}, [
								h3_({
									class: class_(
										'inline',
										'font-bold',)
								}, 'Quantum Dream Weaver')
							]),
							strong_(': '),
							dd_({
								class: class_('inline')
							}, [
								`She has developed her practice to include holistic healing, education and mentorship programs`,
							]),
							div_({
								class: class_('mt-4')
							}, [
								dt_({
									class: class_(
										'ml-4',
										'font-bold',
										'inline')
								}, [
									h3_({
										class: class_(
											'inline',)
									}, 'Ambassador & Liaison for')
								]),
								strong_(':'),
								dd_([
									ul_({
										class: class_(
											'ml-4',
											'list-disc',)
									}, [
										li_('Natural Systems Design & Education'),
										li_('Alternative Mental and Physical healing'),
										li_('Regenerative and sustainable development'),
										li_('Environmental education'),
										li_('Human Relations & Positive Psychology'),
										li_('Reiki Master — (1998)'),
									]),
								])
							]),
							div_({
								class: class_('mt-4'),
							}, [
								dt_({
									class: class_(
										'ml-4',
										'font-bold',
										'inline')
								}, [
									h3_({
										class: class_('inline')
									}, 'Experience/Skills')
								]),
								strong_(':'),
								dd_({
									class: class_('text-sm')
								}, [
									ul_({
										class: class_(
											'ml-4',
											'list-disc',
											)
									}, [
										li_('Business owner (1999—present)'),
										li_('Legal Aid (2002—present)'),
										li_('Minister (2018—present)'),
										li_('Master Gardener (2016—present)'),
										li_('Skilled Artisan, artist, author, & poet (1978-present)'),
									]),
								])
							]),
						]),
					]),
				]),
			]),
			div_({
				id: 'cell-l1',
				class: class_(
					'relative',
					'z-10',
					'row-start-4',
					'col-span-3',
					'row-span-4',
					'bg-gray-950',
					'opacity-60',)
			}),
			div_({
				id: 'cell-r0',
				class: class_(
					'relative',
					'z-10',
					'row-start-1',
					'col-span-2',
					'row-span-7',
					'bg-gradient-to-tl',
					'from-card-r0-br',
					'to-card-r0-tl',
					'opacity-80',)
			}),
		])
	}
}
