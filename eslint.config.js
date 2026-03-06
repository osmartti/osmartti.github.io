import svelte from "eslint-plugin-svelte";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
	{ ignores: ["node_modules/**", "dist/**"] },
	...svelte.configs["flat/recommended"],
	prettier,
	{
		languageOptions: {
			globals: {
				...globals.browser
			},
			parserOptions: {
				ecmaVersion: 2022,
				sourceType: "module"
			}
		},
		rules: {
			semi: ["error", "always"],
			"no-tabs": "off"
		}
	}
];
