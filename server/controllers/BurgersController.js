import BaseController from "../utils/BaseController";
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
}