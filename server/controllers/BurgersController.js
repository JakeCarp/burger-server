import { burgersService } from '../services/BurgersService'
import BaseController from '../utils/BaseController'
export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .post('', this.createBurger)
      .delete('/:burgerId', this.deleteBurger)
      .put('/:burgerId', this.updateBurger)
  }

  /**
   * Sends found values to a client by request
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  async getAllBurgers(req, res, next) {
    try {
      const burgers = await burgersService.getAllBurgers()
      return res.send(burgers)
    } catch (error) {
      next(error)
    }
  }

  async createBurger(req, res, next) {
    try {
      const burger = await burgersService.createBurger(req.body)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async deleteBurger(req, res, next) {
    try {
      const burger = await burgersService.deleteBurger(req.params.burgerId)
      return res.send(burger)
    } catch (error) {
      next(error)
    }
  }

  async updateBurger(req, res, next) {
    try {
      const id = req.params.burgerId
      const burgerData = req.body
      burgerData.id = id
      const burger = burgersService.updateBurger(id, burgerData)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
}
