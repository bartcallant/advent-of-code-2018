/**
 * --- Part Two ---
 *
 * Amidst the chaos, you notice that exactly one claim doesn't overlap by even a single square inch of fabric with any other claim.
 * If you can somehow draw attention to it, maybe the Elves will be able to make Santa's suit after all!
 *
 * For example, in the claims above, only claim 3 is intact after all claims are made.
 *
 * What is the ID of the only claim that doesn't overlap?
 */

interface Claim {
	id: string;
	x: number;
	y: number;
	width: number;
	height: number;
	overlap?: boolean;
}

const parseStringToClaim = (inp: string): Claim => {
	const [id, , location, size] = inp.split(' ');

	const [x, y] = location.split(',');
	const [width, height] = size.split('x');

	return {
		height: parseFloat(height),
		id,
		width: parseFloat(width),
		x: parseFloat(x),
		y: parseFloat(y),
	};
};

export const challenge = (inputs: string[]): string => {
	const areaMap = new Map<string, string>();
	const noOverlapClaimIds = new Map<string, boolean>();

	for (const inp of inputs) {
		const claim = parseStringToClaim(inp);

		const xEnd = claim.x + claim.width;
		const yEnd = claim.y + claim.height;

		for (let x = claim.x; x < xEnd; x++) {
			for (let y = claim.y; y < yEnd; y++) {
				const key = `${x}x${y}`;
				const areaValue = areaMap.get(key);

				if (areaValue === undefined) {
					areaMap.set(key, claim.id);

					if (!noOverlapClaimIds.has(claim.id)) {
						noOverlapClaimIds.set(claim.id, true);
					}
				} else {
					areaMap.set(key, claim.id);
					noOverlapClaimIds.set(claim.id, false);
					noOverlapClaimIds.set(areaValue, false);
				}
			}
		}
	}

	const results = Array.from(noOverlapClaimIds.entries()).filter(([, value]) => value).map(([id]) => id.replace('#', ''));

	return results[0];
};
