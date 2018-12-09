import test from 'ava';

import { getStringInput } from './fixtures/utils';

import { challenge2 } from '../lib';

test('test results', (t) => {
	t.is(challenge2([
		'Step C must be finished before step A can begin.',
		'Step C must be finished before step F can begin.',
		'Step A must be finished before step B can begin.',
		'Step A must be finished before step D can begin.',
		'Step B must be finished before step E can begin.',
		'Step D must be finished before step E can begin.',
		'Step F must be finished before step E can begin.'
	], 0, 1), 15);
});

test('results', async (t) => {
	t.is(challenge2(getStringInput(), 60, 4), 1053);
});
