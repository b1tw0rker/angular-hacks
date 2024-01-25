import { Rule, SchematicContext, Tree, chain } from '@angular-devkit/schematics';

export function ngAdd(_options: any): Rule {
  return chain([
    addDependencies(),
  ]);
}

function addDependencies(): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    const packageContent = tree.read('/package.json');
    if (packageContent) {
      const packageJson = JSON.parse(packageContent.toString('utf-8'));

      const dependencies = packageJson['devDependencies'];
      dependencies['@tailwindcss/postcss7-compat'] = '^2.0.2';
      dependencies['postcss'] = '^7';
      dependencies['postcss-import'] = '^12.0.1';
      dependencies['autoprefixer'] = '^9';

      tree.overwrite('/package.json', JSON.stringify(packageJson, null, 2));
    }
    return tree;
  };
}
