import db from "../../../database"


const create = async (rule: any) => {
  try {
    return await db.rule.create({
        data: rule,
        
    })
  } catch(e: any) {
    throw new Error(e.message)
  }
}

const remove = async (rule: any) => {
  try {
    return await db.rule.delete({
        where: {
          id: rule.id
        }
    })
  } catch(e: any) {
    throw new Error(e.message)
  }
}

const update = async (rule: any) => {
  try {
    return await db.rule.update({
        where: {
          id: rule.id
        },
        data: rule
    })
  } catch(e: any) {
    throw new Error(e.message)
  }
}

const findAll = async () => {
  try {
    return await db.rule.findMany()
  } catch(e: any) {
    throw new Error(e.message)
  }
}

const findOne = async (data: any) => {
  try {
    return await db.rule.findUnique(
      {
        where: data
      }
    )
  } catch(e: any) {
    throw new Error(e.message)
  }
}

export default {
  create,
  remove,
  update,
  findAll,
  findOne
}