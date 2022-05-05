import { ProductEntity } from 'src/products/entities/product.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @Column('uuid', { name: 'first_name' })
  firstName: string

  @Column('uuid', { name: 'last_name' })
  lastName: string

  @Column('uuid', { name: 'cpf' })
  cpf: string

  @Column('uuid', { name: 'email' })
  email: string

  @Column('uuid', { name: 'password' })
  password: string

  @OneToMany(() => ProductEntity, (product) => product.user)
  products: ProductEntity[]
}
