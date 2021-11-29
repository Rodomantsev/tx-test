import { Body, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { UserEntity } from '../entites/user.entity';
import { JwtAuthGuard } from '../../../core/auth/guards/jwt-auth.guard';

@Controller('users')
export class UsersController {

  constructor(private usersService: UsersService) { }


  @Post()
  createUser(@Body() userData: UserEntity | any): Promise<any> {
    return this.usersService.create(userData);
  }

  @UseGuards(JwtAuthGuard)
  @Get('currentUser')
  getCurrentUser(@Request() req) {
    return req.user;
  }
  //get
  //post
  //delete


}
