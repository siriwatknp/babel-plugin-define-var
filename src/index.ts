import type * as babelTypes from '@babel/core';
import { Program } from '@babel/types';

export default function reactRefreshSig({
  types: t,
}: typeof babelTypes): babelTypes.PluginObj {
  return {
    visitor: {
      AssignmentExpression(nodePath) {
        if (
          nodePath.node.left.type === 'Identifier' &&
          !nodePath.scope.hasBinding(nodePath.node.left.name)
        ) {
          const rootScope = nodePath.scope.getProgramParent();
          const rootPath = rootScope.path as babelTypes.NodePath<Program>;
          const [declaration] = rootPath.unshiftContainer('body', [
            t.variableDeclaration('var', [
              t.variableDeclarator(t.identifier(nodePath.node.left.name)),
            ]),
          ]);

          rootScope.registerDeclaration(declaration as babelTypes.NodePath<babelTypes.Node>);
        }
      },
    },
  };
}
