import { ChainIdHelper } from '@keplr-wallet/cosmos';
import { useMemo } from 'react';
import { useRecoilValue } from 'recoil';
import { chainInfoListState } from '../../../recoil/atoms/chainInfoListState';

interface Params {
	chainId: string;
}

export function useChainInfoByChainId({ chainId }: Params) {
	const chainInfoList = useRecoilValue(chainInfoListState);

	return useMemo(() => {
		const chainIdentifier = ChainIdHelper.parse(chainId);

		const chainInfoWithExplorer = chainInfoList.find(chainInfoWithExplorer => {
			return ChainIdHelper.parse(chainInfoWithExplorer.chainId).identifier === chainIdentifier.identifier;
		});

		if (!chainInfoWithExplorer) {
			throw new Error(`Unknown chain info: ${chainId}`);
		}

		return chainInfoWithExplorer;
	}, [chainId, chainInfoList]);
}
