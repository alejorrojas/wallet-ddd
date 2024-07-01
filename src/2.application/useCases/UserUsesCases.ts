import { Injectable } from '@nestjs/common';
import UsersRepository from '../repository/UsersRepository';
import UserCreateDTO from '../../4.presentation/dto/UserCreateDTO';
import { EntityId } from 'shared/1.domain/BaseDomainClass';

@Injectable()
export class UserUseCases {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createUser(userDTO: UserCreateDTO): Promise<EntityId> {
    return await this.usersRepository.createUser(userDTO);
  }
}
