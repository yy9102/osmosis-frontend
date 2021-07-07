import produce from 'immer';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { knownDenomTraceByDenomState } from '../../../recoil/atoms/knownDenomTraceByDenomState';
import { getDenomTrace } from '../../../remotes/denoms/getDenomTrace';

interface Params {
	ibcDenom?: string;
	/** restDomain is always OSMOSIS_CHAIN_API */
	restDomain?: string;
}

export function useDenomTrace({ ibcDenom, restDomain }: Params) {
	const [knownDenomTraceByDenom, setKnownDenomTraceByDenom] = useRecoilState(knownDenomTraceByDenomState);

	const queryData = useQuery(
		['denomTrace', restDomain, ibcDenom],
		async () => {
			if (ibcDenom == null) {
				return null;
			}
			const denomTrace = await getDenomTrace({ ibcDenom, restDomain });
			setKnownDenomTraceByDenom(
				produce(prevKnownDenomTraceByDenom => {
					prevKnownDenomTraceByDenom[ibcDenom] = denomTrace;
				})
			);
		},
		{
			enabled: ibcDenom != null && knownDenomTraceByDenom[ibcDenom] == null,
			retry: 1,
		}
	);

	return { ...queryData, data: ibcDenom != null ? knownDenomTraceByDenom?.[ibcDenom] : null };
}
