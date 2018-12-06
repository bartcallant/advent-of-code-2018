/**
 * --- Day 6: Chronal Coordinates ---
 *
 * The device on your wrist beeps several times, and once again you feel like you're falling.
 *
 * "Situation critical," the device announces. "Destination indeterminate. Chronal interference detected.
 * Please specify new target coordinates."
 *
 * The device then produces a list of coordinates (your puzzle input). Are they places it thinks are safe
 * or dangerous? It recommends you check manual page 729. The Elves did not give you a manual.
 *
 * If they're dangerous, maybe you can minimize the danger by finding the coordinate that gives the
 * largest distance from the other points.
 *
 * Using only the Manhattan distance, determine the area around each coordinate by counting the
 * number of integer X,Y locations that are closest to that coordinate (and aren't tied in distance to any other coordinate).
 *
 * Your goal is to find the size of the largest area that isn't infinite. For example, consider the following list of coordinates:
 *
 * 1, 1
 * 1, 6
 * 8, 3
 * 3, 4
 * 5, 5
 * 8, 9
 * If we name these coordinates A through F, we can draw them on a grid, putting 0,0 at the top left:
 *
 * ..........
 * .A........
 * ..........
 * ........C.
 * ...D......
 * .....E....
 * .B........
 * ..........
 * ..........
 * ........F.
 * This view is partial - the actual grid extends infinitely in all directions. Using the Manhattan distance,
 * each location's closest coordinate can be determined, shown here in lowercase:
 *
 * aaaaa.cccc
 * aAaaa.cccc
 * aaaddecccc
 * aadddeccCc
 * ..dDdeeccc
 * bb.deEeecc
 * bBb.eeee..
 * bbb.eeefff
 * bbb.eeffff
 * bbb.ffffFf
 * Locations shown as . are equally far from two or more coordinates, and so they don't count as being closest to any.
 *
 * In this example, the areas of coordinates A, B, C, and F are infinite - while not shown here,
 * their areas extend forever outside the visible grid. However,
 * the areas of coordinates D and E are finite: D is closest to 9 locations, and E is closest to 17
 * (both including the coordinate's location itself). Therefore, in this example, the size of the largest area is 17.
 *
 * What is the size of the largest area that isn't infinite?
 */

interface Coordinate {
	x: number;
	y: number;
}

const convertInputToCoordinateArray = (input: string): Coordinate[] => {
	const lines = input.split('\n').filter((line) => line.trim());

	const coordinates = lines.map((line) => {
		const [x, y] = line.split(', ');

		return {
			x: parseInt(x, 10),
			y: parseInt(y, 10)
		};
	});

	return coordinates;
};

const calculateDistance = (a: Coordinate, b: Coordinate): number => Math.abs(a.x - b.x) + Math.abs(a.y - b.y);

export const challenge = (input: string): number => {
	const coordinates = convertInputToCoordinateArray(input);

	const [, highestY] = coordinates.reduce(([lowX, highY], coordinate) => {
		const res: Coordinate[] = [];

		if (lowX.x <= coordinate.x && lowX.y <= coordinate.y) {
			res.push(lowX);
		} else {
			res.push(coordinate);
		}

		if (highY.y >= coordinate.y && highY.x >= highY.x) {
			res.push(highY);
		} else {
			res.push(coordinate);
		}

		return res;
	}, [{ x: 1000, y: 1000 }, { x: 0, y: 0 }]);

	const coordinateMap = new Map<string, string>();
	const excludes: string[] = [];

	for (let x = 0; x <= highestY.x; x++) {
		for (let y = 0; y <= highestY.y; y++) {
			const currentCoordinate: Coordinate = { x, y };

			const [closest1, closest2] = coordinates
				.map((coordinate) => ({
					coordinate,
					distance: calculateDistance(currentCoordinate, coordinate)
				})).sort((c1, c2) => c1.distance - c2.distance);

			const key = `${x}x${y}`;

			const coordinateKey = `${closest1.coordinate.x}x${closest1.coordinate.y}`;

			if (closest1.distance === closest2.distance) {
				coordinateMap.set(key, '.');
			} else {
				coordinateMap.set(key, coordinateKey);
			}

			if (x === 0 || y === 0 || x === highestY.x || y === highestY.y) {
				excludes.push(coordinateKey);
			}
		}
	}

	const finiteCoordinates = coordinates.filter((c) => {
		const key = `${c.x}x${c.y}`;

		const includes = excludes.includes(key);

		return !includes;
	});

	const coordinateFrequencyMap = new Map<string, number>(
		finiteCoordinates.map((c) => [`${c.x}x${c.y}`, 0] as [string, number])
	);

	for (const c of coordinateMap.values()) {
		const coordinateFrequency = coordinateFrequencyMap.get(c);

		if (coordinateFrequency !== undefined) {
			coordinateFrequencyMap.set(c, coordinateFrequency + 1);
		}
	}

	const countMap = Array.from(coordinateFrequencyMap.values());
	const result = countMap.reduce((high, curr) => curr > high ? curr : high, 0);

	return result;
};
