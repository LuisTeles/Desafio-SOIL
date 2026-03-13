import { defineConfig } from '@prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  datasource: {
    // Note o underline em soil_db
    url: 'postgresql://user:password@localhost:5432/soil_db?schema=public',
  },
});