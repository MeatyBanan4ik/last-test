export const dateDiffInWeek = (d1, d2) => {
	const date1 = new Date(d1);
	const date2 = new Date(d2);

	const diffInMs = Math.abs(date2 - date1);

	return Math.round(diffInMs / (1000 * 60 * 60 * 24 * 7));
};

export default dateDiffInWeek;
