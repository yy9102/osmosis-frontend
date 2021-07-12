export interface DenomTraceRes {
	/** native coin where ibcToken came from eg) uatom */
	base_denom: string;
	/** contractAddress/osmosisChannelId eg) transfer/channel-0,
	 * If it is native coin such as OSMO or ION, it will return native.
	 * */
	path: string | 'native';
}

export interface DenomPath {
	/** 'transfer' for ibc transferred tokens*/
	portId: string;
	/** osmosis zone channelId */
	channelId: string;
}

export type DenomType = 'native' | 'ibc';

/** contract address is '' if it is native denom */
export type ContractAddress = 'transfer' | 'native';
