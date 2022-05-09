import { BaseEntity } from 'src/common/entities/base.entity'
import { ProductEntity } from 'src/products/entities/product.entity'
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity('user')
export class UserEntity extends BaseEntity{
  @Column('character varying', { name: 'first_name' })
  firstName: string

  @Column('character varying', { name: 'last_name' })
  lastName: string

  @Column('character varying', { name: 'cpf' })
  cpf: string

  @Column('character varying', { name: 'email' })
  email: string

  @Column('character varying', { name: 'password' })
  password: string

  @OneToMany(() => ProductEntity, (product) => product.user)
  products: ProductEntity[]
}
