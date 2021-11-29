import { Controller, Request, Get, Post, UseGuards, Delete, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from "./core/auth/services/auth.service";
import { LocalAuthGuard } from "./core/auth/guards/local-auth.guard";

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }


  constructor(private readonly appService: AppService, private authService: AuthService) {}

  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body.email, req.body.password);
  }
  @Delete('auth/login')
  async delete(@Query('email') email: string) {
    return this.authService.delete(email);
  }
}
