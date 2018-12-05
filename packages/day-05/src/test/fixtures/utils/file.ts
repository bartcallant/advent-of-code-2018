import * as fs from 'fs';
import * as path from 'path';

const getInput = () => {
	const filePath = path.join(__dirname, '..', 'data', `input.txt`);

	return fs.readFileSync(filePath)
		.toString()
		.trim();
};

export const getStringInput = getInput;
