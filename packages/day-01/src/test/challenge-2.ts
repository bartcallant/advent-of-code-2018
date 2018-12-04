import test from 'ava';

import { getIntInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2([1, -1]), 0);
	t.is(challenge2([3, 3, 4, -2, -4]), 10);
	t.is(challenge2([-6, 3, 8, 5, -6]), 5);
	t.is(challenge2([7, 7, -2, -7, -4]), 14);
});

test('results', async (t) => {
	t.is(challenge2(getIntInput()), 65474);
});
