import EventsIcon from './icons/EventsIcon.svelte';
import GuidesIcon from './icons/GuidesIcon.svelte';
import MessagesIcon from './icons/MessagesIcon.svelte';
import PicturesIcon from './icons/PicturesIcon.svelte';
import DocumentsIcon from './icons/DocumentsIcon.svelte';
import StatisticsIcon from './icons/StatisticsIcon.svelte';

export const data = [
	{
		section: 'Admin',
		icon: DocumentsIcon,
		content: [
			{
				title: 'Home',
				link: '/dashboard/'
			},
			{
				title: 'Chef',
				link: '/dashboard/admin/chef'
			},
			{
				title: 'Rider',
				link: '/dashboard/admin/rider'
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
		section: 'Profile',
		icon: PicturesIcon,
		content: [
			{
				title: 'Preview',
				link: '/dashboard/profile/preview'
			},
			{
				title: 'Edit',
				link: '/dashboard/profile/edit'
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
