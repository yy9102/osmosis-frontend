export function isEmpty(value: string | number | null | undefined | Record<string, any> | Array<any>) {
	if (typeof value === 'number') {
		return !isNaN(value);
	}
	return (
		value == null || value === '' || (Array.isArray(value) && value.length === 0) || JSON.stringify(value) === '{}'
	);
}
