import { container__div_ } from '@btakita/ui--any--herbaliciousbliss/container'
import {
	heroicons_bars_3_,
	heroicons_user_circle_,
	heroicons_uturn_left_,
	heroicons_x_mark_
} from '@btakita/ui--any--herbaliciousbliss/icon'
import { person_ } from '@btakita/domain--server--herbaliciousbliss/auth'
import { site__title_ } from '@rappstack/domain--server/site'
import { class_, style_, style_url_ } from 'ctx-core/html'
import { type tag_dom_T } from 'relementjs'
import { a_, button_, div_, header_, img_, li_, nav_, span_, ul_ } from 'relementjs/html'
import { type request_ctx_T } from 'relysjs/server'
import { stroke_class, text_class } from '../css/index.js'
import herbaliciousbliss_logo_webp from '../public/asset/image/herbaliciousbliss-logo.webp'
import google_signin_light_svg from '../public/asset/image/icon/google_signin_light.svg'
export function site__header_({
	ctx,
	title,
	class: _class
}:{
	ctx:request_ctx_T
	title?:string
	class?:string
}, ...children:tag_dom_T[]) {
	const links = [
		{ to: '/#features', label: 'Features' },
		{ to: '/#solution', label: 'Solution' },
		{ to: '/#reviews', label: 'Reviews' },
	]
	return (
		header_({
			class: class_(
				'site__header',
				_class),
		}, [
			nav_({
				class: class_(
					'w-full',
					'border-black/5',
					'dark:border-white/5',
					'lg:border-transparent')
			}, [
				container__div_({
					class: class_(
						'left_side',
						'relative',
						'flex',
						'flex-wrap',
						'items-center',
						'justify-between',
						'gap-6',
						'md:gap-0',
						'py-3',
						'md:py-4')
				}, [
					nav_master__div_(),
					account__button_({
						class: class_(
							'hidden',
							'lg:block',
							'relative',
							'ml-auto'),
						is_active__toggle: 1
					}),
					nav_layer_(),
					navlinks__div_()
				])
			]),
			...children
		]))
	function nav_master__div_() {
		return (
			div_({
				class: class_(
					'relative',
					'z-20',
					'flex',
					'w-full',
					'justify-between',
					'md:px-0',
					'lg:w-max')
			}, [
				a_({
					href: '/#home',
					'aria-logo': 'logo',
					class: class_(
						'flex',
						'items-center',
						'justify-center',
						'space-x-2',
						'text-2xl')
				}, [
					div_({
						class: class_(
							'h-24',
							'w-24',
							'rounded-full',
							'bg-no-repeat',
							'bg-top',
							'bg-contain'),
						style: style_({
							'background-image': style_url_(herbaliciousbliss_logo_webp)
						})
					}),
					div_({
						class: class_(
							'mt-2',
							'font-bold',
							text_class)
					}, site__title_(ctx))
				]),
				button_({
					id: 'menu_handle',
					'aria-label': 'menu_handle',
					'title': 'menu_handle',
					class: class_(
						'relative',
						'flex',
						'items-center',
						'lg:hidden',
						'-mr-6',
						'p-6',
						'group'),
					/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__menu_handle__hyop} */
					hyop: 'site__header__menu_handle__hyop'
				}, [
					heroicons_bars_3_({
						class: class_(
							'group-[.active]:hidden',
							'h-6',
							'w-6',
							stroke_class)
					}),
					heroicons_x_mark_({
						class: class_(
							'hidden',
							'group-[.active]:block',
							'h-6',
							'w-6',
							stroke_class)
					})
				])
			])
		)
	}
	function nav_layer_() {
		return (
			div_({
				id: 'nav_layer',
				'aria-hidden': true,
				class: class_(
					'lg:hidden',
					'fixed',
					'inset-0',
					'z-10',
					'h-screen',
					'w-screen',
					'origin-bottom',
					'scale-y-0',
					'bg-white/70',
					'dark:bg-gray-900/70',
					'backdrop-blur-2xl',
					'transition',
					'duration-500'),
				/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__nav_layer__hyop} */
				hyop: 'site__header__nav_layer__hyop'
			})
		)
	}
	function navlinks__div_() {
		return (
			div_({
				id: 'navlinks',
				class: class_(
					'invisible',
					'absolute',
					'top-full',
					'translate-y-1',
					'lg:-translate-y-8',
					'left-0',
					'lg:left-auto',
					'lg:right-7',
					'z-20',
					'w-full',
					'lg:w-96',
					'origin-top-right',
					'p-8',
					'scale-90',
					'flex-col',
					'flex-wrap',
					'justify-end',
					'gap-6',
					'rounded-3xl',
					'border',
					'border-gray-100',
					'bg-white',
					'dark:bg-gray-900',
					'opacity-0',
					'shadow-2xl',
					'shadow-gray-600'),
				/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__navlinks__hyop} */
				hyop: 'site__header__navlinks__hyop'
			}, [
				div_({
					id: 'navlinks_menu',
					class: class_('relative'),
					/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__navlinks_menu__hyop} */
					hyop: 'site__header__navlinks_menu__hyop'
				}, [
					account__button_({
						class: class_(
							'absolute',
							'-top-4',
							'-right-4')
					}),
					div_({
						class: class_(
							'w-full',
							'text-gray-600',
							'dark:text-gray-200',
							'lg:w-auto',
							'lg:pr-4',
							'lg:pt-0')
					}, [
						ul_({
							class: class_(
								'flex',
								'flex-col',
								'gap-6',
								'tracking-wide',
								'lg:flex-row',
								'lg:gap-0',
								'lg:text-sm'),
							/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__navlinks_link__hyop} */
							hyop: 'site__header__navlinks_link__hyop'
						}, links.map(link=>
							li_([
								a_({
									href: link.to,
									class: class_(
										'hover:text-primary',
										'block',
										'transition',
										'dark:hover:text-white',
										'md:px-4')
								}, [
									span_(link.label)
								])
							]))),
					]),
					div_({
						class: class_(
							'mt-12',
							'lg:mt-0')
					}, [
						a_({
							href: '/register',
							class: class_(
								'relative',
								'flex',
								'h-9',
								'w-full',
								'items-center',
								'justify-center',
								'px-4',
								'before:absolute',
								'before:inset-0',
								'before:rounded-full',
								'before:bg-primary',
								'before:transition',
								'before:duration-300',
								'hover:before:scale-105',
								'active:duration-75',
								'active:before:scale-95',
								'sm:w-max')
						}, [
							span_({
								class: class_(
									'relative',
									'text-sm',
									'font-semibold',
									'text-white')
							}, ' Get Started')
						])
					])
				]),
				div_({
					id: 'navlinks_login',
					class: class_(
						'hidden',
						'relative'),
					/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__navlinks_login__hyop} */
					hyop: 'site__header__navlinks_login__hyop'
				}, [
					button_({
						class: class_(
							'absolute',
							'lg:hidden',
							'-top-4',
							'-right-4',
							'h-6',
							'w-6'),
						/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__navlinks_login__back__hyop} */
						hyop: 'site__header__navlinks_login__back__hyop'
					}, [
						heroicons_uturn_left_({
							class: stroke_class
						})
					]),
					button_({
						class: class_(
							'absolute',
							'hidden',
							'lg:block',
							'-top-4',
							'-right-4',
							'h-6',
							'w-6'),
						/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__navlinks_login__close__hyop} */
						hyop: 'site__header__navlinks_login__close__hyop'
					}, [
						heroicons_x_mark_({
							class: stroke_class
						})
					]),
					a_({
						id: 'google_signin',
						href: '/login/google'
					}, [
						img_({
							src: google_signin_light_svg,
							width: 175,
							height: 40,
							title: 'Sign in with Google'
						})
					])
				])
			])
		)
	}
	function account__button_({
		class: _class,
		is_active__toggle
	}:{
		class?:string
		is_active__toggle?:1|0
	}) {
		const person = person_(ctx)
		return (
			button_({
				class: class_(
					'account__button',
					'h-6',
					'w-6',
					_class),
				'data-is_active__toggle': is_active__toggle,
				/** @see {import('@btakita/ui--browser--herbaliciousbliss/layout').site__header__account__button__hyop} */
				hyop: 'site__header__account__button__hyop'
			}, [
				person?.image
					? img_({
						src: person.image,
						class: class_('rounded-full'),
						/** @see {https://stackoverflow.com/a/61042200/142571} */
						referrerpolicy: 'no-referrer'
					})
					: heroicons_user_circle_({
						class: class_(
							'stroke-black',
							'dark:stroke-white')
					})
			])
		)
	}
}
