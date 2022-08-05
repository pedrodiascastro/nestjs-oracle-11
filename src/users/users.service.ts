import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { Cliente } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Cliente)
    private readonly usersRepository: Repository<Cliente>,
  ) {}
/*
  create(createUserDto: CreateUserDto): Promise<Cliente> {
    const user = new Cliente();
    user.id = createUserDto.id;
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;

    return this.usersRepository.save(user);
  }*/

  async findAll(): Promise<Cliente[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Cliente> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
