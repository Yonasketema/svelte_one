import { readable, writable } from 'svelte/store';

// export const count = writable(0);

//⭐️ custom store

function createCount() {
	const { subscribe, set, update } = writable(0);

	return {
		subscribe,
		update,
		increment: () => update((n) => n + 1),
		decrement: () => update((n) => n - 1),
		reset: () => set(0)
	};
}

export const count = createCount();

export const tme = readable(null, function start(set) {
	return function stop() {};
});
