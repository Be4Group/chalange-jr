import { ClientStatus } from '../enums/client-status.enum';
import { IsEmail, IsEnum, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateClientDto {
  @IsString()
  @MinLength(1)
  nome: string;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(1)
  telefone: string;

  @IsString()
  @MinLength(1)
  documento: string;

  @IsOptional()
  @IsEnum(ClientStatus)
  status?: ClientStatus = ClientStatus.ACTIVE;
}