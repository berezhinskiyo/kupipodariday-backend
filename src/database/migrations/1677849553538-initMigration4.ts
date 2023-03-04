import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration41677849553538 implements MigrationInterface {
    name = 'initMigration41677849553538'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nest_project"."wish_wishlists_wish_list" ("wishId" integer NOT NULL, "wishListId" integer NOT NULL, CONSTRAINT "PK_66bd03d51cd5a13982306418d32" PRIMARY KEY ("wishId", "wishListId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_0c36896124823a960587a06b8e" ON "nest_project"."wish_wishlists_wish_list" ("wishId") `);
        await queryRunner.query(`CREATE INDEX "IDX_9c2d2a07085dfa19c0ce95faf3" ON "nest_project"."wish_wishlists_wish_list" ("wishListId") `);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "hidden" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_wishlists_wish_list" ADD CONSTRAINT "FK_0c36896124823a960587a06b8e4" FOREIGN KEY ("wishId") REFERENCES "nest_project"."wish"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_wishlists_wish_list" ADD CONSTRAINT "FK_9c2d2a07085dfa19c0ce95faf3c" FOREIGN KEY ("wishListId") REFERENCES "nest_project"."wish_list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_wishlists_wish_list" DROP CONSTRAINT "FK_9c2d2a07085dfa19c0ce95faf3c"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_wishlists_wish_list" DROP CONSTRAINT "FK_0c36896124823a960587a06b8e4"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "hidden" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:56:41.552147'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:56:41.552147'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:56:41.552147'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:56:41.552147'`);
        await queryRunner.query(`DROP INDEX "nest_project"."IDX_9c2d2a07085dfa19c0ce95faf3"`);
        await queryRunner.query(`DROP INDEX "nest_project"."IDX_0c36896124823a960587a06b8e"`);
        await queryRunner.query(`DROP TABLE "nest_project"."wish_wishlists_wish_list"`);
    }

}
