import { useQuery } from 'react-query';
import { getDenomTrace } from '../../../remotes/denoms/getDenomTrace';

interface Params {
	coinMinimalDenom: string;
	restDomain?: string;
}

export function useDenomTrace({ coinMinimalDenom, restDomain }: Params) {
	return useQuery(['denomTrace', restDomain, coinMinimalDenom], () => {
		return getDenomTrace({ coinMinimalDenom, restDomain });
	});
}
