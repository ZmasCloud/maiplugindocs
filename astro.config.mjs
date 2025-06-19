// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '麦麦插件仓库',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '如何写插件',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '如何写0.1插件', slug: 'guides/example' },
						{ label: '关于v0.2', slug: 'guides/example2' },
						{ label: '关于插件生成器', slug: 'guides/3' },
					],
				},
				{
					label: '如何提交插件',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
