import { useQuery } from 'react-query';
import { getPoolById } from '../../../remotes/pools/getPoolById';

interface Params {
	poolId: string;
}
export function usePoolById({ poolId }: Params) {
	return useQuery(['osmosis', 'gamm', 'pool', poolId], () => {
		return getPoolById({ poolId });
	});
}
