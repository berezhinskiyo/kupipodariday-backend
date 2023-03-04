import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration21677776498517 implements MigrationInterface {
    name = 'initMigration21677776498517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ADD "link" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-02-25 20:21:50.169875'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-02-25 20:21:50.169875'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-02-25 20:21:50.169875'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-02-25 20:21:50.169875'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" DROP COLUMN "link"`);
    }

}
