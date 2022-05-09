import { ProductEntity } from "./entities/product.entity";
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(ProductEntity)
export class ProductRepository extends Repository<ProductEntity> {
  async getProductByUserId(userId: string): Promise<ProductEntity[]> {
    return this.createQueryBuilder('product')
      .where("product.userId = :id", {id: userId})
      .getMany()
  }
}
