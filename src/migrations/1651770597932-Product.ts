import {MigrationInterface, QueryRunner} from "typeorm";

export class Product1651770597932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" (id uuid not null default uuid_generate_v4(), user_id uuid not null, description varchar(255) not null)`)
        await queryRunner.query(`ALTER TABLE "product" add constraint "product_id_pkey" primary key ("id")`)
        await queryRunner.query(`ALTER TABLE "product" add constraint "product_user_id_foreign" foreign key ("user_id") references "user" ("id") ON UPDATE CASCADE`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" drop constraint "product_user_id_foreign"`);
        await queryRunner.query(`ALTER TABLE "product" drop constraint "product_id_pkey"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
