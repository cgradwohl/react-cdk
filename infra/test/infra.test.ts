import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import ReactCDKStack from '../lib/infra-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack: cdk.Stack = new ReactCDKStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
