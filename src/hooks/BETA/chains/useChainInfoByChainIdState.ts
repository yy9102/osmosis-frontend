import { useRecoilState } from 'recoil';
import { chainInfoByChainIdState } from '../../../recoil/atoms/chainInfoByChainIdState';

interface Params {
	/** chainId or chain identifier (from ChainIdHelper.parse) can be used*/
	chainId: string;
}

export function useChainInfoByChainIdState({ chainId }: Params) {
	return useRecoilState(chainInfoByChainIdState(chainId));
}
