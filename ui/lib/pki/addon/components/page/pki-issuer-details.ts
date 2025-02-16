/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import type PkiIssuerModel from 'vault/models/pki/issuer';

interface Args {
  issuer: PkiIssuerModel;
}

export default class PkiIssuerDetailsComponent extends Component<Args> {
  @tracked showRotationModal = false;
}
