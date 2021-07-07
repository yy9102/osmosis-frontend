import axios from 'axios';
import { OSMOSIS_POOL_API_DOMAIN } from '../../constants/BETA/urls';
import { PoolInfoRes } from '../../models/BETA/pool';

interface Params {
	poolId: string;
}

export async function getPoolById({ poolId }: Params) {
	const res = await axios.get<{ pool: PoolInfoRes }>(`${OSMOSIS_POOL_API_DOMAIN}/osmosis/gamm/v1beta1/pools/${poolId}`);
	return res.data?.pool;
}
