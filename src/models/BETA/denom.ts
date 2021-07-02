export interface DenomPath {
	/** 'transfer' for ibc transferred tokens*/
	portId: string;
	/** osmosis zone channelId */
	channelId: string;
}

export type DenomType = 'native' | 'ibc';

/** contract address is '' if it is native denom */
export type ContractAddress = 'transfer' | '';
