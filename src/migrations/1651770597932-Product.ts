import {MigrationInterface, QueryRunner} from "typeorm";

export class Product1651770597932 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" (id uuid not null, user_id uuid not null, description varchar(255) not null, price varchar(255) not null, product_image varchar(255), created_at timestamp with time zone not null, updated_at timestamp with time zone null, deleted_at timestamp with time zone null)`)
        await queryRunner.query(`ALTER TABLE "product" add constraint "product_id_pkey" primary key ("id")`)
        await queryRunner.query(`ALTER TABLE "product" add constraint "product_user_id_foreign" foreign key ("user_id") references "user" ("id") ON UPDATE CASCADE`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" drop constraint "product_user_id_foreign"`);
        await queryRunner.query(`ALTER TABLE "product" drop constraint "product_id_pkey"`);
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
