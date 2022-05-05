import { TypeOrmModuleOptions } from '@nestjs/typeorm'

const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: String(process.env.DB_PASS),
  database: process.env.DB_NAME,
  entities: [`src/migrations/*.entity.{js,ts}`],
  migrations: [`${__dirname}/../migrations/*.{js,ts}`],
  synchronize: false,
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export const typeOrmConfig = (): TypeOrmModuleOptions => {
  return dbConfig
}