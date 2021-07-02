export function isProdRuntime() {
	return window?.location?.hostname?.startsWith?.('app.') ?? false;
}
