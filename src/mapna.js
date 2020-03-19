export const mapna = ({ arr, fn, len = arr.length }) => {
	let r = []
	for (let i = 0; i < len; i++) {
		r.push(fn(arr[i]))
	}
	return r
}