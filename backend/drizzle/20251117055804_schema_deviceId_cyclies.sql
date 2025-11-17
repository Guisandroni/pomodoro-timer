ALTER TABLE "cycles" DROP CONSTRAINT "cycles_user_id_user_id_fk";
--> statement-breakpoint
ALTER TABLE "cycles" ADD COLUMN "device_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "cycles" DROP COLUMN "user_id";