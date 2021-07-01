import { ChainInfo } from '@keplr-wallet/types';

export interface ChainInfoWithExplorer extends ChainInfo {
	// Formed as "https://explorer.com/{txHash}"
	explorerUrlToTx: string;
}
