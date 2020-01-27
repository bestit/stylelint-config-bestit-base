module.exports = {
    rules: {
        ...require('./rules/at-rule.js'),
        ...require('./rules/block.js'),
        ...require('./rules/color.js'),
        ...require('./rules/comment.js'),
        ...require('./rules/declaration.js'),
        ...require('./rules/font.js'),
        ...require('./rules/function.js'),
        ...require('./rules/general.js'),
        ...require('./rules/length.js'),
        ...require('./rules/media.js'),
        ...require('./rules/number.js'),
        ...require('./rules/property.js'),
        ...require('./rules/rule.js'),
        ...require('./rules/selector.js'),
        ...require('./rules/string.js'),
        ...require('./rules/unit.js'),
        ...require('./rules/value.js'),
    }
};
