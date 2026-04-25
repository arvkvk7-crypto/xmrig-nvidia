// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Arvk } from '../client';

export abstract class APIResource {
  protected _client: Arvk;

  constructor(client: Arvk) {
    this._client = client;
  }
}
