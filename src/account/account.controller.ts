import { Controller, Post } from '@nestjs/common';

@Controller('account')
export class AccountController {
  // userName, password, nick, realName, email, phone, birth, gender, locate
  @Post()
  async create() {}
  //login - ip, userName, password, clientType, /* duplicate = null */
  @Post()
  async login() {}
}
