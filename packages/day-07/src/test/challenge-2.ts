import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2([]), []);
});

test('results', async (t) => {
	t.is(challenge2(getStringInput()), []);
});
