import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError } from 'src/common/errors';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepo: UserRepository,
  ){}

  async create(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { cpf, email, firstName, lastName, password } = createUserDto

    const user = new UserEntity()
    user.cpf = cpf
    user.email = email
    user.firstName = firstName
    user.lastName = lastName
    user.password = password

    const response = await this.userRepo.save(user)

    return response
  }

  async getPUsersOrUserById(id?: string): Promise<UserEntity | UserEntity[]> {
    if(id){
      const response = await this.userRepo.findOneOrFail(id)
      return response
    }
    const response = await this.userRepo.find()
    return response
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<UserEntity> {
    const user = await this.userRepo.findOne(id)

    if(!user){
      throw new EntityNotFoundError('user')
    }

    const { cpf, email, firstName, lastName, password } = updateUserDto

    user.cpf = cpf === undefined ? user.cpf : cpf
    user.email = email === undefined ? user.email : email
    user.firstName = firstName === undefined ? user.firstName : firstName
    user.lastName = lastName === undefined ? user.lastName : lastName
    user.password = password === undefined ? user.password : password

    const response = await this.userRepo.save(user)

    return response 
  }

  async remove(id: string): Promise<any> {
    const user = await this.userRepo.findOne(id)

    if(!user) {
      throw new EntityNotFoundError('product')
    }

    user.deletedAt = new Date(new Date().toUTCString())

    return await this.userRepo.save(user)
  }
}
