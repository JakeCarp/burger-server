
import { BadRequest } from '../utils/Errors'

const FakeDB = {
  burgers: [
    {
      name: 'Big burger',
      id: 0
    },
    {
      name: 'Small burger',
      id: 1
    }
  ]
}

class BurgersService {
  async getAllBurgers() {
    const burgers = await FakeDB.burgers
    return burgers
  }

  async createBurger(burgerData) {
    burgerData.id = FakeDB.burgers.length
    await FakeDB.burgers.push(burgerData)
    return burgerData
  }

  async deleteBurger(id) {
    const index = FakeDB.burgers.findIndex(b => b.id === id)
    if (index === -1) {
      throw new BadRequest("can't delete a burger that is already not there")
    }
    FakeDB.burgers.splice(index, 1)
    return 'deleted'
  }

  async updateBurger(id, burgerData) {
    const index = FakeDB.burgers.findIndex(b => b.id === id)
    if (index === -1) {
      throw new BadRequest('no burger by that id')
    }
    FakeDB.splice(index, 1, burgerData)
    return burgerData
  }
}

export const burgersService = new BurgersService()
