import {MigrationInterface, QueryRunner} from "typeorm";

export class User1651766458910 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" (id uuid not null, first_name varchar(255) not null, last_name varchar(255) not null, cpf varchar(12) not null, email varchar(255) not null, password varchar(255) not null, created_at timestamp with time zone not null, updated_at timestamp with time zone null, deleted_at timestamp with time zone null)`)
        await queryRunner.query(`ALTER TABLE "user" add constraint "user_id_pkey" primary key ("id")`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" drop constraint "user_id_pkey"`)
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
