// take in array of posts
// create a new tag set (no dups)
// add the tags of each post to the tag set
// return a single array of tags based on the set

import { ref } from 'vue';

const useTags = (posts) => {
	const tags = ref([]);
	const tagSet = new Set();

	posts.forEach((item) => {
		item.tags.forEach((tag) => tagSet.add(tag));
	});
	tags.value = [ ...tagSet ];

	return { tags };
};

export default useTags;
