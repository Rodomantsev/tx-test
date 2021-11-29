import { Module } from '@nestjs/common';
import { PostModule } from "./posts/post.module";
import { UsersModule } from './users/users.module';

@Module({
    imports: [PostModule, UsersModule],
    providers: [],
    controllers: [],
    exports:[]
})
export class AllModule {}
