import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge1 } from '../lib';

test('test results', (t) => {
	t.is(challenge1([]), []);
});

test('results', async (t) => {
	t.is(challenge1(getStringInput()), []);
});
