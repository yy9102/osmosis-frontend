import { useRecoilState } from 'recoil';
import { chainInfoByIdState } from '../../../recoil/atoms/chainInfoByIdState';

interface Params {
	/** chainId or chain identifier (from ChainIdHelper.parse) can be used*/
	chainId: string;
}

export function useChainInfoState({ chainId }: Params) {
	return useRecoilState(chainInfoByIdState(chainId));
}
