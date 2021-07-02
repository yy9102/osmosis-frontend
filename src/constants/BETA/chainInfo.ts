import { ChainIdHelper } from '@keplr-wallet/cosmos';
import { EmbedChainInfos } from '../../config';
import { ChainInfoWithExplorer } from '../../models/BETA/chain/chainInfo';

export const chainInfoList: ChainInfoWithExplorer[] = JSON.parse(JSON.stringify(EmbedChainInfos));

export const chainInfoByIdentifier = chainInfoList.reduce((accum, chainInfo) => {
	const { identifier } = ChainIdHelper.parse(chainInfo.chainId);
	accum[identifier] = chainInfo;
	return accum;
}, {} as { [identifier: string]: ChainInfoWithExplorer });
