import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ClientStatus } from './enums/client-status.enum';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ListClientsQueryDto } from './dto/list-clients-query.dto';

@Injectable()
export class ClientsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findById(id: string) {
    return this.prisma.client.findUnique({ where: { id } });
  }

  findByEmail(email: string) {
    return this.prisma.client.findUnique({ where: { email } });
  }

  findByDocumento(documento: string) {
    return this.prisma.client.findUnique({ where: { documento } });
  }

  create(data: CreateClientDto) {
    return this.prisma.client.create({ data });
  }

  update(id: string, data: UpdateClientDto) {
    return this.prisma.client.update({ where: { id }, data });
  }

  softDelete(id: string) {
    return this.prisma.client.update({
      where: { id },
      data: { status: ClientStatus.INACTIVE },
    });
  }

  findMany(query: ListClientsQueryDto) {
    const { nome, email, status, page = 1, limit = 10 } = query;
    const where = {
      ...(nome && { nome: { contains: nome } }),
      ...(email && { email: { contains: email } }),
      ...(status && { status }),
    };

    return Promise.all([
      this.prisma.client.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.client.count({ where }),
    ]).then(([items, total]) => ({ items, total, page, limit }));
  }
}