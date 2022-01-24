import db from '../../../database'

const create = async (user: any) => {
  try {
    return await db.user.create({
      data: user,
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const remove = async (user: any) => {
  try {
    return await db.user.delete({
      where: {
        id: user.id,
      },
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const update = async (user: any) => {
  try {
    return await db.user.update({
      where: {
        id: user.id,
      },
      data: user,
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const findAll = async () => {
  try {
    return await db.user.findMany({})
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const findOne = async (data: any) => {
  try {
    return await db.user.findUnique({
      where: data,
    })
  } catch (e: any) {
    throw new Error(e.message)
  }
}

const findBusinessByUser = async (data: any) => {
  try {
    return await db.user.findMany({
      where: {
        id: data.id,
      },
      include: {
        business: true,
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
  findBusinessByUser,
}
