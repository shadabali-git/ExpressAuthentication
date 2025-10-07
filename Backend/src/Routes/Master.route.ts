import { Router } from "express"

const route: Router = Router()

import CreateUserRoute from "./AuthenticationRoutes/CreateUser.route"
import DeleteUserRoute from "./AuthenticationRoutes/DeleteUser.route"
import LoginUserRoute from "./AuthenticationRoutes/LoginUser.route"
import GetUserDetailsUsingTokenRoute from "./AuthenticationRoutes/GetUserDetailsUsingToken.route"
import AiResponseOnHumanMove from "./tictactoe/responseAi.route"

route.use("/create", CreateUserRoute)
route.use("/delete", DeleteUserRoute)
route.use("/login", LoginUserRoute)
route.use("/get", GetUserDetailsUsingTokenRoute)
route.use("/tictacktoe",AiResponseOnHumanMove);

export default route