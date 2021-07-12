interface Params {
	/** eg) transfer/channel-0 or 'native' */
	path: string | 'native';
}

export function toSourceChannelIdPortId({ path }: Params) {
	if (path === 'native') {
		return {
			sourceChannelId: 'native',
			portId: 'native',
		} as const;
	}
	/** TODO: handle for ibc-ibc-transfers */
	const [portId, sourceChannelId] = path.split('/') as ['transfer', string];
	return {
		sourceChannelId,
		portId,
	} as const;
}
