-- CreateTable
CREATE TABLE "public"."NotarizedDocument" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "hash" TEXT NOT NULL,

    CONSTRAINT "NotarizedDocument_pkey" PRIMARY KEY ("id")
);
