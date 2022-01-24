import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

import { rules } from './seeds/rules'
import { users } from './seeds/admin'

async function main() {
  await prisma.rule.createMany({
    data: rules,
  })
  await prisma.user.createMany({
    data: users,
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
