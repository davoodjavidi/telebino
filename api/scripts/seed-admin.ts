/**
 * One-time bootstrap for the platform admin account (there is no admin
 * sign-up flow by design — only Telebino staff should have this access).
 * Run with: npm run seed:admin
 */
import "dotenv/config";
import bcrypt from "bcrypt";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

const email = process.env.SEED_ADMIN_EMAIL ?? "admin@telebino.ir";
const password = process.env.SEED_ADMIN_PASSWORD ?? "Telebino@Dev1";
const name = process.env.SEED_ADMIN_NAME ?? "مدیر پلتفرم";

async function main() {
  const prisma = new PrismaClient({
    adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL }),
  });

  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) {
    console.log(`Admin account already exists for ${email} — nothing to do.`);
    await prisma.$disconnect();
    return;
  }

  const passwordHash = await bcrypt.hash(password, 10);
  await prisma.adminUser.create({ data: { email, passwordHash, name } });

  console.log("Admin account created:");
  console.log(`  email:    ${email}`);
  console.log(`  password: ${password}`);
  console.log("Change this password before going to production.");

  await prisma.$disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
