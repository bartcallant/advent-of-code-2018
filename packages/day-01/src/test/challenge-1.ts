import test from 'ava';

import { getIntInput } from './fixtures/utils';

import { challenge1 } from '../lib';

test('test results', (t) => {
	t.is(challenge1([1, -2, 3, 1]), 3);
	t.is(challenge1([1, 1, 1]), 3);
	t.is(challenge1([1, 1, -2]), 0);
	t.is(challenge1([-1, -2, -3]), -6);
});

test('results', async (t) => {
	t.is(challenge1(getIntInput()), 459);
});
