import { Injectable } from '@nestjs/common';
import fetch from 'node-fetch';

@Injectable()
export class AppService {

  async getCat(): Promise<string> {
    const url = 'https://aws.random.cat/meow';
    const response = await fetch(url);
    const catResponse = await response.json() as { file: string };
    return catResponse.file;
  }

}
