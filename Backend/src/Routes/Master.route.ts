import { Router } from "express"

const route: Router = Router()

import CreateUserRoute from "./AuthenticationRoutes/CreateUser.route"
import DeleteUserRoute from "./AuthenticationRoutes/DeleteUser.route"
import LoginUserRoute from "./AuthenticationRoutes/LoginUser.route"
import GetUserDetailsUsingTokenRoute from "./AuthenticationRoutes/GetUserDetailsUsingToken.route"
import AiResponseOnHumanMove from "./tictactoe/responseAi.route"

route.use("/v1/create", CreateUserRoute)
route.use("/v1/delete", DeleteUserRoute)
route.use("/v1/login", LoginUserRoute)
route.use("/v1/get", GetUserDetailsUsingTokenRoute)
route.use("/v1/tictacktoe",AiResponseOnHumanMove);

export default route