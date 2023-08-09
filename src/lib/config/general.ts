import type {
	ThemeConfig,
	HeadConfig,
	HeaderConfig,
	FooterConfig,
	DateConfig,
	FeedConfig
} from '$lib/types/general';

export const theme: ThemeConfig = [
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
		name: 'bumblebee',
		text: '🐝 Bumblebee'
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
	},
	{
		name: 'winter',
		text: '🌨️ Winter'
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
