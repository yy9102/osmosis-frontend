import { ChainIdHelper } from '@keplr-wallet/cosmos';
import { atom, DefaultValue, selectorFamily } from 'recoil';
import { chainInfoByIdentifier } from '../../constants/BETA/chainInfo';
import { ChainInfoWithExplorer } from '../../models/BETA/chain/chainInfo';

const chainInfoMapState = atom({
	key: 'chainInfoMapState',
	default: chainInfoByIdentifier,
});

export const chainInfoByIdState = selectorFamily<ChainInfoWithExplorer, string>({
	key: 'chainInfoByIdState',

	get: (chainId: string) => ({ get }) => {
		const { identifier } = ChainIdHelper.parse(chainId);
		return get(chainInfoMapState)[identifier];
	},

	set: (chainId: string) => ({ set }, newChainInfo) => {
		return set(chainInfoMapState, prevChainInfoMapState => {
			/** handle for reset */
			if (newChainInfo instanceof DefaultValue) {
				return chainInfoByIdentifier;
			}
			const { identifier } = ChainIdHelper.parse(chainId);
			return { ...prevChainInfoMapState, [identifier]: newChainInfo };
		});
	},
});
