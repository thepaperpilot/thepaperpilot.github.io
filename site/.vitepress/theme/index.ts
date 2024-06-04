import DefaultTheme from 'vitepress/theme'
import { h } from "vue"
import { NolebaseHighlightTargetedHeading } from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'
import './custom.css'

export default {
	...DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			'layout-top': () => [
				h(NolebaseHighlightTargetedHeading)
			]
		})
	}
};
