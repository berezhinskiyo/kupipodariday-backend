import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration41677848189974 implements MigrationInterface {
    name = 'initMigration41677848189974'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nest_project"."wish_wishlist" ("wish" integer NOT NULL, "wishlist" integer NOT NULL, CONSTRAINT "PK_a6648af1891e2fc76043cacb8ce" PRIMARY KEY ("wish", "wishlist"))`);
        await queryRunner.query(`CREATE INDEX "IDX_bc1a3c9e7d6a12f52a7a7064fb" ON "nest_project"."wish_wishlist" ("wish") `);
        await queryRunner.query(`CREATE INDEX "IDX_9cd83745513f2dc08610513a49" ON "nest_project"."wish_wishlist" ("wishlist") `);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT 'NOW()'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_wishlist" ADD CONSTRAINT "FK_bc1a3c9e7d6a12f52a7a7064fbd" FOREIGN KEY ("wish") REFERENCES "nest_project"."wish"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_wishlist" ADD CONSTRAINT "FK_9cd83745513f2dc08610513a499" FOREIGN KEY ("wishlist") REFERENCES "nest_project"."wish_list"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_wishlist" DROP CONSTRAINT "FK_9cd83745513f2dc08610513a499"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_wishlist" DROP CONSTRAINT "FK_bc1a3c9e7d6a12f52a7a7064fbd"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:35:18.272833'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."user" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:35:18.272833'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:35:18.272833'`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish_list" ALTER COLUMN "createdAt" SET DEFAULT '2023-03-03 15:35:18.272833'`);
        await queryRunner.query(`DROP INDEX "nest_project"."IDX_9cd83745513f2dc08610513a49"`);
        await queryRunner.query(`DROP INDEX "nest_project"."IDX_bc1a3c9e7d6a12f52a7a7064fb"`);
        await queryRunner.query(`DROP TABLE "nest_project"."wish_wishlist"`);
    }

}
