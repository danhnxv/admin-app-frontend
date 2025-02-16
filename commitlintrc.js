/*
Commit message format:

'(story/bug)-<code> : <subject>'
*/

module.exports = {
    extends: ['@commitlint/config-conventional'],
    parserPreset: {
      parserOpts: {
        headerPattern: /^(\w*)-(\w*)\s\:\s(\w*)/,
        headerCorrespondence: ['type', 'code', 'subject'],
      },
    },
    rules: {
      'header-max-length': [2, 'always', 100],
      'type-enum': [2, 'always', ['story', 'bug']],
    },
    ignores: [
      (commit) => {
        return commit.includes('WIP') || commit.includes('__init__');
      },
    ],
  };
  