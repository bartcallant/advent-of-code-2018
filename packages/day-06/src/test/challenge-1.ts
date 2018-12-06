import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge1 } from '../lib';

test('test results', (t) => {
	t.is(challenge1(`1, 1
		1, 6
		8, 3
		3, 4
		5, 5
		8, 9
	`), 17);
});

test('results', async (t) => {
	t.is(challenge1(getStringInput()), 0);
});
