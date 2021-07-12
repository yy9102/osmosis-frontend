import axios from 'axios';
import { PoolsPerPage } from '../../config';
import { OSMOSIS_POOL_API_DOMAIN } from '../../constants/BETA/urls';
import { PoolInfoRes } from '../../models/BETA/pool';

interface Params {
	/** pageNumber: if undefined gets first 100 pool list, starts at 1 */
	pageNum?: number;
	/** poolsPerPage: number of pools per page*/
	poolsPerPage?: number;
}

/** get all osmosis pool list */
export async function getAllPoolList({ pageNum, poolsPerPage = PoolsPerPage }: Params = {}) {
	let apiUrl: string;
	if (pageNum != null) {
		apiUrl = `${OSMOSIS_POOL_API_DOMAIN}/osmosis/gamm/v1beta1/pools?pagination.offset=${(pageNum - 1) *
			poolsPerPage}&pagination.limit=${poolsPerPage}`;
	} else {
		apiUrl = `${OSMOSIS_POOL_API_DOMAIN}/osmosis/gamm/v1beta1/pools?pagination.limit=200`;
	}
	const res = await axios.get<{
		pagination: { next_key: string; total: string };
		pools: PoolInfoRes[];
	}>(apiUrl);
	return res.data;
}
