import test from 'ava';

import { getChallengeInput } from './fixtures/utils';

import { challenge1 } from '../lib';

test('test results', (t) => {
	t.is(challenge1(''), 0);
});

test('results', async (t) => {
	t.is(challenge1(getChallengeInput()), 0);
});
