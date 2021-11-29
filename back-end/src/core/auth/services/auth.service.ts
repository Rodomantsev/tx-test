import { Injectable } from '@nestjs/common';
import { UsersService } from '../../../modules/users/services/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne({email});
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(email, password) {
        const user = await this.validateUser(email, password);
        if(user){
            return {
                access_token: this.jwtService.sign({ email, password }),
                user
            };
        }
    }
    async  delete(email) {
        // TODO: need to refactor
        const user = await this.usersService.findOne(email);
        return this.usersService.delete(user[1])
    }

}
