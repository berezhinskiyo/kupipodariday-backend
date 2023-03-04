import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration41677839197272 implements MigrationInterface {
    name = 'initMigration41677839197272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" DROP COLUMN "raised"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" DROP COLUMN "copie"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 13:21:40.401933'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 13:21:40.401933'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 13:21:40.401933'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 13:21:40.401933'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ADD "copie" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ADD "raised" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ADD "price" integer NOT NULL`);
    }

}
