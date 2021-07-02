import { useQuery } from 'react-query';
import { getPoolById } from '../../../remotes/pools/getPoolById';

interface Params {
	poolId?: string;
}

export function usePoolById({ poolId }: Params) {
	return useQuery(
		['osmosis', 'gamm', 'pool', poolId],
		() => {
			if (poolId == null) {
				return null;
			}
			return getPoolById({ poolId });
		},
		{ enabled: poolId != null }
	);
}
