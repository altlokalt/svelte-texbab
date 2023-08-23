import type {
	ThemeConfig,
	HeadConfig,
	HeaderConfig,
	FooterConfig,
	DateConfig,
	FeedConfig
} from '$lib/types/general';
import * as dotenv from 'dotenv';

export const API_BASE_URL = 'https://api.texbab.com'


export const theme: ThemeConfig = [
	{
		name: 'winter',
		text: '🌨️ Winter'
	},
	{
		name: 'bumblebee',
		text: '🐝 Bumblebee'
	},
	{
		name: 'retro',
		text: '🌇 Retro'
	},
	{
		name: 'light',
		text: '🌞 Light'
	},
	{
		name: 'dark',
		text: '🌑 Dark'
	},
	{
		name: 'cupcake',
		text: '🧁 Cupcake'
	},
	{
		name: 'emerald',
		text: '💎 Emerald'
	},
	{
		name: 'corporate',
		text: '🏢 Corporate'
	},
	{
		name: 'synthwave',
		text: '🌃 Synthwave'
	},
	{
		name: 'cyberpunk',
		text: '🤖 Cyberpunk'
	},
	{
		name: 'valentine',
		text: '🌸 Valentine'
	},
	{
		name: 'halloween',
		text: '🎃 Halloween'
	},
	{
		name: 'garden',
		text: '🏡 Garden'
	},
	{
		name: 'forest',
		text: '🌳 Forest'
	},
	{
		name: 'aqua',
		text: '💦 Aqua'
	},
	{
		name: 'lofi',
		text: '🎶 Lo-Fi'
	},
	{
		name: 'pastel',
		text: '🎨 Pastel'
	},
	{
		name: 'fantasy',
		text: '🧚 Fantasy'
	},
	{
		name: 'wireframe',
		text: '📏 Wireframe'
	},
	{
		name: 'black',
		text: '🖤 Black'
	},
	{
		name: 'luxury',
		text: '💎 Luxury'
	},
	{
		name: 'dracula',
		text: '🧛 Dracula'
	},
	{
		name: 'cmyk',
		text: '🖨 CMYK'
	},
	{
		name: 'autumn',
		text: '🍂 Autumn'
	},
	{
		name: 'business',
		text: '🏢 Business'
	},
	{
		name: 'acid',
		text: '💊 Acid'
	},
	{
		name: 'lemonade',
		text: '🍋 Lemonade'
	},
	{
		name: 'night',
		text: '🌃 Night'
	},
	{
		name: 'coffee',
		text: '☕ Coffee'
	}
];

export const menu: any =  [
	
	{
		img: `${
			API_BASE_URL
		}/api/files/eijp9z2zxlgrd4a/rzx50a9wq8sjf5q/0d537318c00611ec84202eb08599686b_a5987812_7e71_11eb_99f8_ea53df50c496_5cc54b47842a7094ebaec2aef0611d_p4L4GTD1XO.png`,
		title: 'Barne',
		slug: '/menu/texbab_barnemenu'
	},
	{
		img: `${
			API_BASE_URL
		}/api/files/eijp9z2zxlgrd4a/rzx50a9wq8sjf5q/0d537318c00611ec84202eb08599686b_a5987812_7e71_11eb_99f8_ea53df50c496_5cc54b47842a7094ebaec2aef0611d_p4L4GTD1XO.png`,
		title: 'Burger',
		slug: '/menu/texbab_burger'
	},
	{
		img: `${
			API_BASE_URL
		}/api/files/qlhqb7ir7o548t1/mkimb7hoxx1oz9i/main_header_WouOltkLLE.webp`,
		title: 'Eat Green',
		slug: '/menu/texbab_eat_green'
	},
	{
		img: `${
			API_BASE_URL
		}/api/files/0zali0zpl9bb4yh/kvdj8zevopzn45m/download_1_GHHWWEdu1g.jpeg`,
		title: 'Kebab',
		slug: '/menu/texbab_kebab'
	},
	{
		img: `${
			API_BASE_URL
		}/api/files/latdufbxmqnxcrk/77v7kftyfnw4b2z/pizza_Lqbuwn5M31.jpg`,
		title: 'Pizza',
		slug: '/menu/texbab_pizza'
	},
	{
		img: `${
			API_BASE_URL
		}/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png`,
		title: 'smaretter',
		slug: '/menu/texbab_smaretter'
	},
	{
		img: `${
			API_BASE_URL
		}/api/files/eijp9z2zxlgrd4a/rzx50a9wq8sjf5q/0d537318c00611ec84202eb08599686b_a5987812_7e71_11eb_99f8_ea53df50c496_5cc54b47842a7094ebaec2aef0611d_p4L4GTD1XO.png`,
		title: 'Full',
		slug: '/menu/texbab_fullmenu'
	},
	{
		img: `${
			API_BASE_URL
		}/api/files/izawv6hmhwokkqa/nv0fft46f7g54kg/badge_2_bg_2b4OkbBwRK.png`,
		title: 'Special',
		slug: '/menu/texbab_special'
	}
];


export const head: HeadConfig = {};

export const header: HeaderConfig = {
	nav: [
		{
			text: 'About',
			link: '/about'
		},
		{
			text: 'Other Projects',
			link: '/projects'
		}
	]
};

export const footer: FooterConfig = {
	nav: [
		{
			text: 'Feed',
			link: '/atom.xml'
		},
		{
			text: 'Sitemap',
			link: '/sitemap.xml'
		},
		{
			text: 'Minfuel',
			link: 'https://minfuel.no'
		},
		{
			text: 'Altlokalt',
			link: 'https://Altlokalt.com'
		},
		{
			text: 'Animevariant',
			link: 'https://Animevariant.com'
		}
	]
};

export const date: DateConfig = {
	locales: 'en-US',
	options: {
		year: '2-digit',
		weekday: 'long',
		month: 'short',
		day: 'numeric'
	}
};

export const feed: FeedConfig = {};
