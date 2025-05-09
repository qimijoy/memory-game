import globals from 'globals';

import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';

import tsESlint from 'typescript-eslint';

import pluginVue from 'eslint-plugin-vue';

import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	// GLOBAL IGNORES
	{
		ignores: ['**/node_modules/*', '**/dist/*'],
	},
	// FILES TO LINT
	{
		files: ['**/*.{js,mjs,cjs,ts,vue}'],
	},
	// GLOBAL LANGUAGE & LINTER SETTINGS
	{
		languageOptions: {
			ecmaVersion: 'latest',
			globals: {
				...globals.browser,
				...globals.node,
				...globals.es2025,
			},
		},
		linterOptions: {
			noInlineConfig: true,
			reportUnusedDisableDirectives: 'error',
		},
	},

	js.configs.recommended,
	jsdoc.configs['flat/recommended'],
	jsdoc.configs['flat/recommended-typescript'],
	{
		name: 'JS',
		files: ['**/*.{js,mjs,cjs,vue}'],
		plugins: {
			jsdoc,
		},
		rules: {
			...js.configs.recommended.rules,
			...jsdoc.configs['flat/recommended'].rules,
		},
	},

	...tsESlint.configs.recommended,
	{
		name: 'TS',
		files: ['**/*.ts'],
		plugins: {
			jsdoc,
		},
		languageOptions: {
			parser: tsESlint.parser,
		},
		rules: {
			...jsdoc.configs['flat/recommended-typescript'].rules,
		},
	},

	...pluginVue.configs['flat/recommended'],
	{
		name: 'Vue',
		files: ['**/*.vue'],
		languageOptions: {
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	},

	eslintPluginPrettierRecommended,
];
