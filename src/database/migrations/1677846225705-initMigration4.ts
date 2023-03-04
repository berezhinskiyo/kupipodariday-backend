import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration41677846225705 implements MigrationInterface {
    name = 'initMigration41677846225705'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:15:55.847217'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:15:55.847217'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:15:55.847217'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:15:55.847217'`);
    }

}
