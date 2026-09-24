-- AlterTable
ALTER TABLE "LookupEntry" ADD COLUMN     "productId" TEXT;

-- CreateIndex
CREATE INDEX "LookupEntry_productId_idx" ON "LookupEntry"("productId");

-- AddForeignKey
ALTER TABLE "LookupEntry" ADD CONSTRAINT "LookupEntry_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE SET NULL ON UPDATE CASCADE;
