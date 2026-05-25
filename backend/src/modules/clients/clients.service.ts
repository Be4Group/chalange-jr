import {
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ClientsRepository } from './clients.repository';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ListClientsQueryDto } from './dto/list-clients-query.dto';
import { ClientStatus } from './enums/client-status.enum';

@Injectable()
export class ClientsService {
  constructor(private readonly repository: ClientsRepository) {}

  // TODO (candidato): implementar regras
  async create(dto: CreateClientDto) {
    // email único → ConflictException
    // documento único → ConflictException
  }

  async findAll(query: ListClientsQueryDto) {
    // return this.repository.findMany(query);
  }

  async findOne(id: string) {
    // NotFoundException se não existir
  }

  async update(id: string, dto: UpdateClientDto) {
    // INACTIVE → ForbiddenException
    // validar unicidade se email/documento mudarem
  }

  async remove(id: string) {
    // soft delete — status INACTIVE
  }
}