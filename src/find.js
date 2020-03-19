export const find = ({ arr, fn, len = arr.length }) => {
	let r
	for (let i = 0; i < len; i++) {
		if (fn(arr[i])) {
			r = i
			break
		}
	}
	return r
}
