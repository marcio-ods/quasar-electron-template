export const sleep = async (milliseconds = 0) =>
	await new Promise((fnc_resolve) => setTimeout(fnc_resolve, milliseconds));
// https://www.youtube.com/watch?v=P1hjyq7nOP0