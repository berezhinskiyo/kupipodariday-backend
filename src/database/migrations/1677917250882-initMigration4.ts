import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration41677917250882 implements MigrationInterface {
    name = 'initMigration41677917250882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ADD "raised" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-04 11:02:54.580191'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-04 11:02:54.580191'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-04 11:02:54.580191'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-04 11:02:54.580191'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" DROP COLUMN "raised"`);
    }

}
