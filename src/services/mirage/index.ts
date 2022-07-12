import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs';
import faker from '@faker-js/faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({})
    },

    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        }
      })
    },

    seeds(server) {
      server.createList('user', 100);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 1750;

      this.get('/users', function (schema, request) {
        const { page = 1, size = 10 } = request.queryParams;

        const total = schema.all('user').length;

        const pageStart = (Number(page) - 1) * Number(size);
        const pageEnd = pageStart + Number(size);

        const users = this.serialize(schema.all('user'))
          .users.slice(pageStart, pageEnd);

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users, pageSize: size, total, totalPages: total/+size, current: page }
        )
      });

      this.get('/users/:id');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  })

  return server;
}