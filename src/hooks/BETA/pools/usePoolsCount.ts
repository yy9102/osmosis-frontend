import { useQuery } from 'react-query';
import { getPoolsCount } from '../../../remotes/pools/getPoolsCount';

export function usePoolsCount() {
	return useQuery(['osmosis', 'poolsCount'], () => {
		return getPoolsCount();
	});
}
