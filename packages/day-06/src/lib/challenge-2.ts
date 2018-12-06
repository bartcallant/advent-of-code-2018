/**
 * --- Part Two ---
 *
 * On the other hand, if the coordinates are safe, maybe the best you can do is try to find a region near as many coordinates as possible.
 *
 * For example, suppose you want the sum of the Manhattan distance to all of the coordinates to be less than 32. For each location,
 * add up the distances to all of the given coordinates; if the total of those distances is less than 32,
 * that location is within the desired region. Using the same coordinates as above, the resulting region looks like this:
 *
 * ..........
 * .A........
 * ..........
 * ...###..C.
 * ..#D###...
 * ..###E#...
 * .B.###....
 * ..........
 * ..........
 * ........F.
 * In particular, consider the highlighted location 4,3 located at the top middle of the region.
 * Its calculation is as follows, where abs() is the absolute value function:
 *
 * Distance to coordinate A: abs(4-1) + abs(3-1) =  5
 * Distance to coordinate B: abs(4-1) + abs(3-6) =  6
 * Distance to coordinate C: abs(4-8) + abs(3-3) =  4
 * Distance to coordinate D: abs(4-3) + abs(3-4) =  2
 * Distance to coordinate E: abs(4-5) + abs(3-5) =  3
 * Distance to coordinate F: abs(4-8) + abs(3-9) = 10
 * Total distance: 5 + 6 + 4 + 2 + 3 + 10 = 30
 * Because the total distance to all coordinates (30) is less than 32, the location is within the region.
 *
 * This region, which also includes coordinates D and E, has a total size of 16.
 *
 * Your actual region will need to be much larger than this example, though,
 * instead including all locations with a total distance of less than 10000.
 *
 * What is the size of the region containing all locations which have a total distance to all given coordinates of less than 10000?
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

export const challenge = (input: string, maxTotalDistance: number): number => {
	const coordinates = convertInputToCoordinateArray(input);

	// const [lowestX, highestY] = coordinates.reduce(([lowX, highY], coordinate) => {
	// 	const res: Coordinate[] = [];

	// 	if (lowX.x <= coordinate.x && lowX.y <= coordinate.y) {
	// 		res.push(lowX);
	// 	} else {
	// 		res.push(coordinate);
	// 	}

	// 	if (highY.y >= coordinate.y && highY.x >= highY.x) {
	// 		res.push(highY);
	// 	} else {
	// 		res.push(coordinate);
	// 	}

	// 	return res;
	// }, [{ x: 1000, y: 1000 }, { x: 0, y: 0 }]);

	let lessThenMaxTotalDistance = 0;

	for (let x = 0; x <= 500; x++) {
		for (let y = 0; y <= 500; y++) {
			const currentCoordinate: Coordinate = { x, y };

			const totalDistance = coordinates.reduce((total, coordinate) => total + calculateDistance(currentCoordinate, coordinate), 0);

			if (totalDistance < maxTotalDistance) {
				lessThenMaxTotalDistance += 1;
			}
		}
	}

	return lessThenMaxTotalDistance;
};
