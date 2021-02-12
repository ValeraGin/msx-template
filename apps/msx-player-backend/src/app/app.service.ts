import { Injectable } from '@nestjs/common';
import { createApi } from 'unsplash-js';
import { environment } from '../environments/environment';

// @ts-ignore
import fetch from 'node-fetch';
// @ts-ignore
global.fetch = fetch;

@Injectable()
export class AppService {

  private unsplash = createApi({ accessKey: environment.unsplash.accessKey });

  async getPhotos(query: string) {
    const response = (await this.unsplash.search.getPhotos({ query: query }))?.response;
    return response?.results?.map(result => {
      return {
        label: result?.description || query,
        image: result?.urls?.small
      };
    });
  }

}
