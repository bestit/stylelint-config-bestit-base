module.exports = {
    'at-rule-empty-line-before': [
        'always',
        {
            except: ['after-same-name', 'first-nested'],
            ignore: ['after-comment'],
            ignoreAtRules: ['import']
        }
    ],
    'at-rule-name-case': 'lower',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
};
