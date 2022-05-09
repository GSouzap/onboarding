import { IsNotEmpty, IsString } from 'class-validator'

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  productDescription: string

  @IsNotEmpty()
  @IsString()
  price: string

  @IsNotEmpty()
  @IsString()
  productImage: string
}
