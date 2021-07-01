import { atom } from 'recoil';
import { EmbedChainInfos } from '../../config';
import { ChainInfoWithExplorer } from '../../models/BETA/chain/chainInfo';

export const chainInfoList: ChainInfoWithExplorer[] = JSON.parse(JSON.stringify(EmbedChainInfos));

export const chainInfoListState = atom({
	key: 'chainInfoListState',
	default: chainInfoList,
});
