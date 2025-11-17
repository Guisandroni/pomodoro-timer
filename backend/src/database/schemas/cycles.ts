import { pgTable, timestamp, integer, text } from "drizzle-orm/pg-core";

export const cycles = pgTable("cycles", {
  id: text("id").primaryKey(),
  deviceId: text("device_id").notNull(),
  task: text("task").notNull(),
  minutesAmount: integer("minutes_amount").notNull(),
  startDate: timestamp("start_date").notNull(),
  interruptedDate: timestamp("interrupted_date"),
  finishedDate: timestamp("finished_date"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
