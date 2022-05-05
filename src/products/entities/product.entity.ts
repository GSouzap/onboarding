import { UserEntity } from 'src/users/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('product')
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id: string

  @Column('uuid', { name: 'product_description' })
  productDescription: string

  @ManyToOne(() => UserEntity, (user) => user.products)
  user: UserEntity
}
