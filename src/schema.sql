PRAGMA defer_foreign_keys=TRUE;

CREATE TABLE IF NOT EXISTS [users] ("username" text PRIMARY KEY,"name" text,"totalAttempted" integer DEFAULT 0,"totalCorrect" integer DEFAULT 0,"rating" integer DEFAULT 1000,"passwordhash" text);