import { MigrationInterface, QueryRunner } from "typeorm";

export class initMigration1676827187014 implements MigrationInterface {
    name = 'initMigration1676827187014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "nest_project"."offer" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "amount" integer NOT NULL, "hidden" boolean NOT NULL, "userId" integer, "itemId" integer, CONSTRAINT "PK_57c6ae1abe49201919ef68de900" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "nest_project"."user" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "username" character varying NOT NULL, "about" character varying NOT NULL, "avatar" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "nest_project"."wish" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "name" character varying NOT NULL, "description" integer NOT NULL, "image" character varying NOT NULL, "price" integer NOT NULL, "raised" integer NOT NULL, "copie" integer NOT NULL, "ownerId" integer, CONSTRAINT "PK_e338d8f62014703650439326d3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "nest_project"."wish_list" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL, "updatedAt" TIMESTAMP NOT NULL, "name" character varying NOT NULL, "description" integer NOT NULL, "image" character varying NOT NULL, CONSTRAINT "PK_f8e27bbb59891db7cd9f920c272" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ADD CONSTRAINT "FK_e8100751be1076656606ae045e3" FOREIGN KEY ("userId") REFERENCES "nest_project"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" ADD CONSTRAINT "FK_40199af67b763fc3ecc5a0d44e0" FOREIGN KEY ("itemId") REFERENCES "nest_project"."wish"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" ADD CONSTRAINT "FK_d976be560c304e5396c50bd72c4" FOREIGN KEY ("ownerId") REFERENCES "nest_project"."user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "nest_project"."wish" DROP CONSTRAINT "FK_d976be560c304e5396c50bd72c4"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" DROP CONSTRAINT "FK_40199af67b763fc3ecc5a0d44e0"`);
        await queryRunner.query(`ALTER TABLE "nest_project"."offer" DROP CONSTRAINT "FK_e8100751be1076656606ae045e3"`);
        await queryRunner.query(`DROP TABLE "nest_project"."wish_list"`);
        await queryRunner.query(`DROP TABLE "nest_project"."wish"`);
        await queryRunner.query(`DROP TABLE "nest_project"."user"`);
        await queryRunner.query(`DROP TABLE "nest_project"."offer"`);
    }

}
