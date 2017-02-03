import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
        {id: 1, firstname: 'admin', lastname:'admin', login:'admin', password:'password', email: 'admin.admin@tuto.com'},
        {id: 2, firstname: 'user', lastname:'user', login:'user', password:'password', email: 'user.user@tuto.com'}
    ];
    return {users};
  }
}
