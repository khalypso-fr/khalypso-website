import { getCollection } from "astro:content";
import type { Announcement } from "~/types";

let _announcements: Array<Announcement>;

const load = async (): Promise<Array<Announcement>> => {
	const collection = await getCollection("announcement");
	return collection.map((item) => item.data);
};

/** */
export const fetchAnnouncements = async (): Promise<Array<Announcement>> => {
	if (!_announcements) {
		_announcements = await load();
	}

	return _announcements;
};
