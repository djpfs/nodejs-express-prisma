import { PrismaClient } from '.prisma/client'

const prisma = new PrismaClient()
// {
//    errorFormat: 'pretty',
//     log: [
//         {
//             emit: 'event',
//             level: 'info',
//         },
//     ]
// }

export default prisma
