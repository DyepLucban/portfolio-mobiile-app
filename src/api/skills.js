import { ApiCore } from "./utilities/core";

export const skillsApi = new ApiCore({
	browse: true,
	browseSpecific: true,
	post: true,
	put: true,
	patch: true,
	remove: true,
	url: 'skills',
});
