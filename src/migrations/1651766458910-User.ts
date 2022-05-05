import {MigrationInterface, QueryRunner} from "typeorm";

export class User1651766458910 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`)
        await queryRunner.query(`CREATE TABLE "user" (id uuid not null default uuid_generate_v4(), first_name varchar(255) not null, last_name varchar(255) not null, cpf varchar(12) not null, email varchar(255) not null, password varchar(255) not null)`)
        await queryRunner.query(`ALTER TABLE "user" add constraint "user_id_pkey" primary key ("id")`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" drop constraint "user_id_pkey"`)
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP EXTENSION IF EXISTS "uuid-ossp"`);
    }

}
