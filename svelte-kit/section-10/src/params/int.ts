import type { ParamMatcher } from '@sveltejs/kit';

export const match: ParamMatcher = (params) => {
	return Number.isInteger(+params) && +params > 0;
};
