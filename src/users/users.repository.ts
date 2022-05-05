import { UserEntity } from "./entities/user.entity";
import { EntityRepository, Repository } from 'typeorm'
import { CreateUserDto } from "./dto/create-user.dto";

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  async createUser(createUserDto: CreateUserDto): Promise<any> {
    return this.createQueryBuilder('user')
      .insert()
      .into(UserEntity)
      .values({
        firstName: createUserDto.firstName,
        lastName: createUserDto.lastName,
        cpf: createUserDto.cpf,
        email: createUserDto.email,
        password: createUserDto.password
      })
  }
}