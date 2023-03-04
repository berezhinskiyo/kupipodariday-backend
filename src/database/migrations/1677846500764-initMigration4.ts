import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration41677846500764 implements MigrationInterface {
    name = 'initMigration41677846500764'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "description" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "image" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "link" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "price" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "raised" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "copie" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "copie" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "raised" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "price" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "link" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "image" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:24:03.398135'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:24:03.398135'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:24:03.398135'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:24:03.398135'`);
    }

}
