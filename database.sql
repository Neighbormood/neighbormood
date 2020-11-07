CREATE TABLE "tag" (
  "id" SERIAL PRIMARY KEY,
  "name" TEXT NOT NULL
);

CREATE TABLE "user" (
  "id" SERIAL PRIMARY KEY
);

CREATE TABLE "google2user" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER NOT NULL
);

CREATE INDEX "idx_google2user__user" ON "google2user" ("user");

ALTER TABLE "google2user" ADD CONSTRAINT "fk_google2user__user" FOREIGN KEY ("user") REFERENCES "user" ("id");

CREATE TABLE "mood" (
  "id" SERIAL PRIMARY KEY,
  "user" INTEGER NOT NULL,
  "timestamp" TIMESTAMPTZ,
  "mood" DOUBLE PRECISION
);

CREATE INDEX "idx_mood__user" ON "mood" ("user");

ALTER TABLE "mood" ADD CONSTRAINT "fk_mood__user" FOREIGN KEY ("user") REFERENCES "user" ("id") ON DELETE CASCADE;

CREATE TABLE "tag_user" (
  "tag" INTEGER NOT NULL,
  "user" INTEGER NOT NULL,
  PRIMARY KEY ("tag", "user")
);

CREATE INDEX "idx_tag_user" ON "tag_user" ("user");

ALTER TABLE "tag_user" ADD CONSTRAINT "fk_tag_user__tag" FOREIGN KEY ("tag") REFERENCES "tag" ("id");

ALTER TABLE "tag_user" ADD CONSTRAINT "fk_tag_user__user" FOREIGN KEY ("user") REFERENCES "user" ("id")
