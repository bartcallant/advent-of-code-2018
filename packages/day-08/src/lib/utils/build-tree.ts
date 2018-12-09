import { TreeItem } from '../entities';

const buildTreeItem = (input: number[]): TreeItem => {
	const [numberOfChildNodes, numberOfMetaDataEntries] = input.splice(0, 2);

	const childnodes: TreeItem[] = [];

	for (let i = 0; i < numberOfChildNodes; i++) {
		childnodes.push(buildTreeItem(input));
	}

	const metadata = input.splice(0, numberOfMetaDataEntries);

	return {
		childnodes,
		metadata
	};
};

export const buildTree = (input: string[]): TreeItem[] => {
	const numbers = input.map(((i) => parseInt(i, 10)));

	const tree: TreeItem[] = [];

	while (numbers.length > 0) {
		tree.push(buildTreeItem(numbers));
	}

	return tree;
};
