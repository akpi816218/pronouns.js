import { cwd } from 'process';
import { resolve } from 'path';

export default {
	entry: './dist/index.js',
	mode: 'production',
	output: {
		path: resolve(cwd(), 'dist'),
		filename: 'webpack.js',
		library: 'PronounsJS'
	}
};
