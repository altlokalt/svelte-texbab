import EventsIcon from './icons/EventsIcon.svelte';
import GuidesIcon from './icons/GuidesIcon.svelte';
import MessagesIcon from './icons/MessagesIcon.svelte';
import PicturesIcon from './icons/PicturesIcon.svelte';
import DocumentsIcon from './icons/DocumentsIcon.svelte';
import StatisticsIcon from './icons/StatisticsIcon.svelte';

export const data = [
	{
		section: 'Documents',
		icon: DocumentsIcon,
		content: [
			{
				title: 'Taxes',
				link: '/dashboard/'
			},
			{
				title: 'Travel',
				link: '/dashboard/documents/travel'
			},
			{
				title: 'Insurance',
				link: '/dashboard/documents/insurance'
			}
		]
	},
	{
		section: 'Messages',
		icon: MessagesIcon,
		content: [
			{
				title: 'Unbox',
				link: '/dashboard/messages/unbox'
			},
			{
				title: 'Unread',
				link: '/dashboard/messages/unread'
			},
			{
				title: 'Archived',
				link: '/dashboard/messages/archived'
			}
		]
	},
	{
		section: 'Pictures',
		icon: PicturesIcon,
		content: [
			{
				title: 'Vacations',
				link: '/dashboard/pictures/vacations'
			},
			{
				title: 'Anniversary',
				link: '/dashboard/pictures/anniversary'
			},
			{
				title: 'University',
				link: '/dashboard/pictures/university'
			}
		]
	},
	{
		section: 'Statistics',
		icon: StatisticsIcon,
		content: [
			{
				title: 'Finances',
				link: '/dashboard/statistics/finances'
			},
			{
				title: 'Call Stats',
				link: '/dashboard/statistics/call-stats'
			},
			{
				title: 'Trip Logs',
				link: '/dashboard/statistics/trip-logs'
			}
		]
	},
	{
		section: 'Events',
		icon: EventsIcon,
		content: [
			{
				title: 'Weddings',
				link: '/dashboard/events/weddings'
			},
			{
				title: 'Networking',
				link: '/dashboard/events/networking'
			}
		]
	},
	{
		section: 'Guides',
		icon: GuidesIcon,
		content: [
			{
				title: 'Documentation',
				link: '/dashboard/guides/documentation'
			}
		]
	}
];
