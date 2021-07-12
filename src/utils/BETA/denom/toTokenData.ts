import { GAMMPoolData } from '../../../stores/osmosis/pool/types';

export function toTokenData(poolAssetToken: GAMMPoolData['poolAssets'][number]) {
	const {
		token: { amount, denom },
		weight,
	} = poolAssetToken;
	return {
		denom,
		amount,
		weight,
	};
}
