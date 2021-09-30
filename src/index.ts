import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

prisma.user.create({
  data: {
    email: 'aaaa@gmail.com',
    name: 'aaaa',
  },
});
