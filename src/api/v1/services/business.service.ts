import db from '../../../database'

const create = async (business: any) => {
  try {
    return await db.business.create({
      data: business,
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const remove = async (business: any) => {
  try {
    return await db.business.delete({
      where: {
        id: business.id,
      },
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const update = async (business: any) => {
  try {
    return await db.business.update({
      where: {
        id: business.id,
      },
      data: business,
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const findAll = async () => {
  try {
    return await db.business.findMany({})
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const findOne = async (data: any) => {
  try {
    return await db.business.findUnique({
      where: data,
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const findUsersByBusiness = async (data: any) => {
  try {
    return await db.business.findMany({
      where: {
        id: data.id,
      },
      include: {
        user: true,
      },
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

export default {
  create,
  remove,
  update,
  findAll,
  findOne,
  findUsersByBusiness,
}
