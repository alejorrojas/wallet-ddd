import { EntityId } from 'shared/1.domain/BaseDomainClass';
import UserCreateDTO from '../../4.presentation/dto/UserCreateDTO';
import User from 'src/1.domain/entities/User';

export default abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User>;
  abstract findById(id: EntityId): Promise<User>;
  abstract createUser(userDTO: UserCreateDTO): Promise<EntityId>;
}
