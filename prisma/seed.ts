import { prisma } from '../src/lib/prisma'


async function seed() {
  await prisma.event.create({
    data: {
      id: '9c8d3d1d-3b7b-40b4-808a-7e7d77364d44',
      title: 'Event Fun',
      slug: 'event-fun',
      details: 'This is a fun event',
      maximumAttendees: 120,
    }
  })
}

seed().then(() =>{
  console.log('Seed Completed')
  prisma.$disconnect()
})