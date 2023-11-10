import { Controller, Ctx, Get } from 'amala'
import { Context } from 'koa'

@Controller('/')
export default class IndexController {
  @Get('/')
  async getMainPage(@Ctx() ctx: Context) {
    return await ctx.render('cryptoCurrency')
  }
}
