#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import ReactCDKStack from '../lib/infra-stack';

const app = new cdk.App();
new ReactCDKStack(app, 'ReactCDKStack');
