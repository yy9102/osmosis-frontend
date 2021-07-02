import { useQuery } from 'react-query';
import { getAllPoolList } from '../../../remotes/pools/getAllPoolList';

interface Params {
	pageNum?: number;
	poolsPerPage?: number;
}
/** All pools in osmosis chain */
export function useAllPoolList({ pageNum, poolsPerPage }: Params = {}) {
	return useQuery(['osmosis', pageNum, poolsPerPage], () => {
		return getAllPoolList({ pageNum, poolsPerPage });
	});
}
