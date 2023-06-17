import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async getAllUsers() {
    const user = this.prisma.user.findMany({
      include: {
        address: true,
        post: true,
      },
    });
    return user;
  }

  async attUser(id, data) {
    await this.prisma.user.update({
      where: { id_user: +id },
      data: { propriedadeTeste: 'AAIIII ZÉ DA MANGA' },
    });
  }

  async criarUser(data) {
    await this.prisma.user.create({
      data,
    });
  }
}
