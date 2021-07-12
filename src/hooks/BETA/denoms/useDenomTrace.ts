import produce from 'immer';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { denomInfoMapState } from '../../../recoil/atoms/denomInfoMapState';
import { getDenomTrace } from '../../../remotes/denoms/getDenomTrace';
import { toSourceChannelIdPortId } from '../../../utils/BETA/denom/toSourceChannelIdPortId';

interface Params {
	ibcDenom?: string;
	/** restDomain is always OSMOSIS_CHAIN_API */
	restDomain?: string;
}

export function useDenomTrace({ ibcDenom, restDomain }: Params) {
	const [knownDenomCoreInfoMap, setKnownDenomCoreInfoMap] = useRecoilState(denomInfoMapState);

	const queryData = useQuery(
		['denomTrace', restDomain, ibcDenom],
		async () => {
			if (ibcDenom == null) {
				return null;
			}
			if (knownDenomCoreInfoMap[ibcDenom] != null) {
				return knownDenomCoreInfoMap[ibcDenom];
			}
			const denomTrace = await getDenomTrace({ ibcDenom, restDomain });
			if (denomTrace == null) {
				console.error(`Unknown: ${ibcDenom}`);
				return null;
			}
			setKnownDenomCoreInfoMap(
				produce(prevKnownDenomTraceByDenom => {
					const { base_denom, path } = denomTrace;
					const { sourceChannelId, portId } = toSourceChannelIdPortId({ path });
					prevKnownDenomTraceByDenom[ibcDenom] = {
						denom: ibcDenom,
						originalDenom: base_denom,
						sourceChannelId,
						portId,
					};
				})
			);
		},
		{
			enabled: ibcDenom != null && knownDenomCoreInfoMap[ibcDenom] == null,
			retry: 1,
		}
	);

	return { ...queryData, data: ibcDenom != null ? knownDenomCoreInfoMap?.[ibcDenom] : null };
}
