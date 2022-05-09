import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError } from 'src/common/errors';
import { UserEntity } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductEntity } from './entities/product.entity';
import { ProductRepository } from './products.repository';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductRepository)
    private productRepo: ProductRepository,
    private readonly userSvc: UsersService
  ) {}

  async create(createProductDto: CreateProductDto, id: string): Promise<ProductEntity> {
    const user = await this.userSvc.getPUsersOrUserById(id)

    if(!user){
      throw new EntityNotFoundError('user')
    }

    const { price, productDescription, productImage } = createProductDto

    const product = new ProductEntity()
    product.price = price
    product.productDescription = productDescription
    product.productImage = productImage
    product.user = user as UserEntity
    
    const response =  await this.productRepo.save(product)

    return response
  }

  async getProductsOrProductById(id?: string): Promise<ProductEntity | ProductEntity[]> {
    if(id){
      const response = await this.productRepo.findOneOrFail(id)
      return response
    }
    const response = await this.productRepo.find()
    return response
  }

  async update(id: string, updateProductDto: UpdateProductDto): Promise<ProductEntity> {
    const product = await this.productRepo.findOne(id)

    if(!product){
      throw new EntityNotFoundError('product')
    }

    const { price, productDescription, productImage } = updateProductDto

    product.price = price === undefined ? product.price : price
    product.productDescription = productDescription === undefined ? product.productDescription : productDescription
    product.productImage = productImage === undefined ? product.productImage : productImage

    const response = await this.productRepo.save(product)

    return response 
  }

  async remove(id: string): Promise<any> {
    const haveProduct = await this.productRepo.findOne(id)

    if(!haveProduct) {
      throw new EntityNotFoundError('product')
    }

    return await this.productRepo.delete(id)
  }

  async getProductsByUserId(userId: string): Promise<ProductEntity[]> {
    return await this.productRepo.getProductByUserId(userId)
  }


}
