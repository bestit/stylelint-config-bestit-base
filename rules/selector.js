module.exports = {
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': [true, {
        ignore: ['custom-elements']
    }],
    'selector-class-pattern': [
        // Allows lowercase, numbers, dash, underscore, js--modal, js--fancy-select
        // Disallows all selectors starting with js-
        '(^(?!js-)([a-z0-9]|-|__)*|' +
        'js--modal|' +
        'js--fancy-select|' +
        'js--fancy-select-text|' +
        'js--tab-menu|' +
        'js--is--dropdown-active|' +
        'js--menu-scroller--arrow|' +
        'js--load-more|' +
        'js--load-previous|' +
        'js--img-zoom--lens|' +
        'js--img-zoom--flyout|' +
        'js--collapse-target|' +
        'js--image-gallery' +
        'js--loading-indicator' +
        'js--menu-scroller' +
        'js--menu-scroller-.*' +
        'js--off-canvas-button' +
        'js--overlay' +
        'js--loading' +
        ')$',
        {
            resolveNestedSelectors: true
        }
    ],
    'selector-max-class': [3, {
        severity: 'warning'
    }],
    'selector-max-empty-lines': 0,
    'selector-max-id': 0,
    'selector-max-pseudo-class': 3,
    'selector-max-type': 1,
    'selector-max-universal': 1,
    'selector-attribute-brackets-space-inside': 'never',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-operator-space-before': 'never',
    'selector-attribute-quotes': 'always',
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-descendant-combinator-no-non-space': true,
    'selector-pseudo-class-case': 'lower',
    'selector-pseudo-class-parentheses-space-inside': 'never',
    'selector-pseudo-element-case': 'lower',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
};
