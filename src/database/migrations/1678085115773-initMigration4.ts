import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration41678085115773 implements MigrationInterface {
    name = 'initMigration41678085115773'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" DROP CONSTRAINT "FK_40199af67b763fc3ecc5a0d44e0"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ADD CONSTRAINT "FK_40199af67b763fc3ecc5a0d44e0" FOREIGN KEY ("itemId") REFERENCES "nest_project"."wish"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" DROP CONSTRAINT "FK_40199af67b763fc3ecc5a0d44e0"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-06 09:43:55.046486'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-06 09:43:55.046486'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-06 09:43:55.046486'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-06 09:43:55.046486'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ADD CONSTRAINT "FK_40199af67b763fc3ecc5a0d44e0" FOREIGN KEY ("itemId") REFERENCES "nest_project"."wish"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
