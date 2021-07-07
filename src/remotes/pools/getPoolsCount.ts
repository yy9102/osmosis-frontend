import axios from 'axios';
import { OSMOSIS_POOL_API_DOMAIN } from '../../constants/BETA/urls';

export async function getPoolsCount() {
	const res = await axios.get<{ numPools: string }>(`${OSMOSIS_POOL_API_DOMAIN}/osmosis/gamm/v1beta1/num_pools`);
	const numPools = Number(res.data.numPools ?? 0);
	return {
		...res.data,
		numPools,
	};
}
