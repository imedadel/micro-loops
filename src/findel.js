export const findel = ({ arr, fn, len = arr.length }) => {
	let r
	for (let i = 0; i < len; i++) {
		if (fn(arr[i])) {
			r = arr[i]
			break
		}
	}
	return r
}
