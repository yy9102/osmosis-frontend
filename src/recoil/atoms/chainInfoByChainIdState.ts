import { ChainIdHelper } from '@keplr-wallet/cosmos';
import produce from 'immer';
import { atom, DefaultValue, selectorFamily } from 'recoil';
import { chainInfoByIdentifier } from '../../constants/BETA/chainInfo';
import { ChainInfoWithExplorer } from '../../models/BETA/chain/chainInfo';

const chainInfoMapState = atom({
	key: 'chainInfoMapState',
	default: chainInfoByIdentifier,
});

export const chainInfoByChainIdState = selectorFamily<ChainInfoWithExplorer, string>({
	key: 'chainInfoByChainIdState',

	get: (chainId: string) => ({ get }) => {
		const { identifier } = ChainIdHelper.parse(chainId);
		return get(chainInfoMapState)[identifier];
	},

	set: (chainId: string) => ({ set }, newChainInfo) => {
		return set(
			chainInfoMapState,
			produce(prevChainInfoMapState => {
				/** handle for reset */
				if (newChainInfo instanceof DefaultValue) {
					return chainInfoByIdentifier;
				}
				const { identifier } = ChainIdHelper.parse(chainId);
				prevChainInfoMapState[identifier] = newChainInfo;
			})
		);
	},
});
