import primaryRules from '@qimijoy/stylelint-config/configs/primary.js';

export default {
	ignoreFiles: ['**/node_modules/**', '**/dist/**'],

	extends: ['stylelint-config-standard'],

	plugins: [
		'stylelint-prettier',
		'stylelint-declaration-block-no-ignored-properties',
		'stylelint-order',
		'stylelint-no-unsupported-browser-features',
	],

	defaultSeverity: 'error',

	reportDescriptionlessDisables: true,
	reportInvalidScopeDisables: true,
	reportNeedlessDisables: true,
	configurationComment: 'stylelint', // --> /* stylelint-disable */
	ignoreDisables: true,

	overrides: [
		{
			files: ['**/*.vue'],
			extends: ['stylelint-config-standard-vue'],
		},
	],

	rules: {
		...primaryRules.rules,
	},
};
