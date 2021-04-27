import combineRoutes from 'koa-combine-routers'

import aRouter from './aRouter'
import bRouter from './bRouter'
import demoRouter from './demoRouter'

export default combineRoutes(
    aRouter,
    bRouter,
    demoRouter
)