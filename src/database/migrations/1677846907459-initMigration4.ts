import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration41677846907459 implements MigrationInterface {
    name = 'initMigration41677846907459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "amount" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "hidden" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ADD "description" character varying`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "image" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "about" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "avatar" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "avatar" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "about" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:28:30.922461'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:28:30.922461'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "image" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ADD "description" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:28:30.922461'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "hidden" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "amount" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:28:30.922461'`);
    }

}
