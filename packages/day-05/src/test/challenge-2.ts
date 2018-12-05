import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2('dabAcCaCBAcCcaDA'), 4);
});

test('results', async (t) => {
	t.is(challenge2(getStringInput()), 6484);
});
