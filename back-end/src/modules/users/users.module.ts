import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entites/user.entity';
import { UsersController } from './controllers/users.controller';

@Module({
  imports:      [TypeOrmModule.forFeature([UserEntity])],
  providers:    [UsersService],
  exports:      [UsersService],
  controllers:  [UsersController]
})
export class UsersModule {}
