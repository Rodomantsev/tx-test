import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from "./entites/post.entity";
import { PostService } from "./services/post.service";
import { PostController } from "./controllers/post.controller";

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    providers: [PostService],
    controllers: [PostController],
})
export class PostModule {}
