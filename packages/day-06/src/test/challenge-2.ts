import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2(`1, 1
		1, 6
		8, 3
		3, 4
		5, 5
		8, 9
	`, 32), 16);
});

test('results', async (t) => {
	t.is(challenge2(getStringInput(), 10000), 46306);
});
