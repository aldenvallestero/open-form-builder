import axios from 'axios';

export default class FormsClient {
  static async createForm(title, fields) {
    console.info(`FormsClient.createForm`);
    try {
      const result = await axios({
        method: 'POST',
        baseURL: 'https://reqres.in',
        url: '/api/users',
        data: {
          name: 'Christian Villamer',
          job: 'Welder',
        },
      });
      console.info('Success', result);
    } catch (e) {
      console.error(`FormsClient.createForm`, e);
    }
  }
}
