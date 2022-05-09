import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'onboarding',
      password: 'onboarding',
      database: 'onboarding_database',
      entities: [__dirname + '/**/*.entity.{js,ts}'],
      migrations: [`${__dirname}/../migrations/*.{js,ts}`],
      synchronize: true,
      cli: {
        migrationsDir: 'src/migrations',
      },
    }),
    UsersModule,
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
