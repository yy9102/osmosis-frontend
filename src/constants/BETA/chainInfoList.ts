import { EmbedChainInfos } from '../../config';
import { ChainInfoWithExplorer } from '../../models/BETA/chain/chainInfo';

export const chainInfoList: ChainInfoWithExplorer[] = JSON.parse(JSON.stringify(EmbedChainInfos));
