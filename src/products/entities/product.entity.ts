import { BaseEntity } from 'src/common/entities/base.entity'
import { UserEntity } from 'src/users/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity('product')
export class ProductEntity extends BaseEntity {
  @Column('character varying', { name: 'product_description' })
  productDescription: string

  @Column('character varying', { name: 'price' })
  price: string

  @Column('character varying', { name: 'product_image' })
  productImage?: string

  @ManyToOne(() => UserEntity, (user) => user.products)
  user: UserEntity
}
