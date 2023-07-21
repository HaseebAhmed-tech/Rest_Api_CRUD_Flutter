-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "text" TEXT,
    "time" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'img/images1.jpeg',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "uodatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recents" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "text" TEXT,
    "time" TEXT NOT NULL,
    "img" TEXT NOT NULL DEFAULT 'img/images1.jpeg',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Recents_pkey" PRIMARY KEY ("id")
);
