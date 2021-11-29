import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entites/user.entity';
import { of } from 'rxjs';

// This should be a real class/interface representing a user entity
export type User = any;

@Injectable()
export class UsersService {
    constructor(@InjectRepository(UserEntity)
                private readonly userRepository: Repository<UserEntity>) {
    }

    async findOne(conditions: {[ key:string] : string}): Promise<User | undefined> {
        return await this.userRepository.findOne(conditions);
    }

    async create(newUser: UserEntity): Promise<UserEntity | string> {
        const user = await this.findOne({ email: newUser.email });
        if(!user.length){
            return await this.userRepository.save(newUser);
        } else {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: `Пользователь с email-ом ${newUser.email.toUpperCase()} уже зарегестрирован!`,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    async delete(user: UserEntity): Promise<UserEntity> {
        return await this.userRepository.remove(user);
    }
}
