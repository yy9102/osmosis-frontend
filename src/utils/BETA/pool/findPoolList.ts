import { PoolInfoRes } from '../../../models/BETA/pool';

interface Params {
	denom: string;
	poolList: PoolInfoRes[];
}

/**
 * @description Find pools that contain given denom.
 * */
export function findPoolList({ denom, poolList }: Params) {
	return poolList.filter(pool => {
		const poolDenomList = pool.poolAssets.map(poolAsset => poolAsset.token.denom);
		return poolDenomList.includes(denom);
	});
}
