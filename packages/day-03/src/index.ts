console.log('Advent of Code - Day 02');

import { input } from './input';

/**
 * --- Day 3: No Matter How You Slice It ---
 *
 * The Elves managed to locate the chimney-squeeze prototype fabric for Santa's suit (thanks to someone who helpfully wrote its box
 * IDs on the wall of the warehouse in the middle of the night). Unfortunately, anomalies are still affecting them - nobody can even
 * agree on how to cut the fabric.
 *
 * The whole piece of fabric they're working on is a very large square - at least 1000 inches on each side.
 *
 * Each Elf has made a claim about which area of fabric would be ideal for Santa's suit. All claims have an ID and consist of a single
 * rectangle with edges parallel to the edges of the fabric. Each claim's rectangle is defined as follows:
 *
 * The number of inches between the left edge of the fabric and the left edge of the rectangle.
 * The number of inches between the top edge of the fabric and the top edge of the rectangle.
 * The width of the rectangle in inches.
 * The height of the rectangle in inches.
 * A claim like #123 @ 3,2: 5x4 means that claim ID 123 specifies a rectangle 3 inches from the left edge, 2 inches from the top edge,
 * 5 inches wide, and 4 inches tall. Visually, it claims the square inches of fabric represented by # (and ignores the square inches
 * of fabric represented by .) in the diagram below:
 *
 * ...........
 * ...........
 * ...#####...
 * ...#####...
 * ...#####...
 * ...#####...
 * ...........
 * ...........
 * ...........
 * The problem is that many of the claims overlap, causing two or more claims to cover part of the same areas.
 * For example, consider the following claims:
 *
 * #1 @ 1,3: 4x4
 * #2 @ 3,1: 4x4
 * #3 @ 5,5: 2x2
 * Visually, these claim the following areas:
 *
 * ........
 * ...2222.
 * ...2222.
 * .11XX22.
 * .11XX22.
 * .111133.
 * .111133.
 * ........
 * The four square inches marked with X are claimed by both 1 and 2. (Claim 3, while adjacent to the others,
 * does not overlap either of them.)
 *
 * If the Elves all proceed with their own plans, none of them will have enough fabric.
 * How many square inches of fabric are within two or more claims?
 */

const testInputs = [
	'#1 @ 1,3: 4x4',
	'#2 @ 3,1: 4x4',
	'#3 @ 5,5: 2x2'
];

interface Claim {
	id: string;
	x: number;
	y: number;
	width: number;
	height: number;
	overlap?: boolean;
}

function parseStringToClaim(inp: string): Claim {
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
}

function calculateOverlap(inputs: string[]): number {
	const areaMap = new Map<string, boolean>();

	for (const inp of inputs) {
		const claim = parseStringToClaim(inp);

		const xEnd = claim.x + claim.width;
		const yEnd = claim.y + claim.height;

		for (let x = claim.x; x < xEnd; x++) {
			for (let y = claim.y; y < yEnd; y++) {
				const key = `${x}x${y}`;
				const areaValue = areaMap.get(key);

				if (areaValue === undefined) {
					areaMap.set(key, false);
				} else {
					areaMap.set(key, true);
				}
			}
		}
	}

	return Array.from(areaMap.values()).filter(Boolean).length;
}

const testResult = calculateOverlap(testInputs);
console.log('Overlap of testResults:', testResult);

const result = calculateOverlap(input);
console.log('Overlap of input:', result); // Correct result: 118322

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

function calculateNonOverlapId(inputs: string[]): string {
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
}

const testResult2 = calculateNonOverlapId(testInputs);
console.log('NonOverlapId of testResults:', testResult2);

const result2 = calculateNonOverlapId(input);
console.log('NonOverlapId of input:', result2); // Correct result: 1178
