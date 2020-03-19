export const map = ({ arr, fn, len = arr.length }) => {
	let r = new Array(len)
	for (let i = 0; i < len; i++) {
		r[i] = fn(arr[i])
	}
	return r
}
