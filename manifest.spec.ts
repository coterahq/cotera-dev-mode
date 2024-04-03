import { test } from 'vitest';
import { manifest } from './manifest';
import {FluentManifest} from '@cotera/sdk';

test('the manifest is valid', () => {
  FluentManifest.fromShorthand(manifest);
})
