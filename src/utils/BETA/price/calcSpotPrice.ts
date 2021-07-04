import { Dec } from '@keplr-wallet/unit';

interface Params {
	inTokenData: {
		tokenAmount: string;
		weight: string;
	};
	outTokenData: {
		tokenAmount: string;
		weight: string;
	};
	swapFee: string;
}
export function calcSpotPrice({ inTokenData, outTokenData, swapFee }: Params) {
	const weightedInAmount = new Dec(inTokenData.tokenAmount).quo(new Dec(inTokenData.weight));
	const weightedOutAmount = new Dec(outTokenData.tokenAmount).quo(new Dec(outTokenData.weight));
	const oneDec = new Dec(1);
	const feeAdjustment = oneDec.quo(oneDec.sub(new Dec(swapFee)));

	return weightedInAmount.quo(weightedOutAmount).mul(feeAdjustment);
}
