import { Get, Controller, Param, Post, Body, UseGuards } from '@nestjs/common';
import { PostService } from "../services/post.service";
import { IPost, PostEntity } from "../entites/post.entity";
import { JwtAuthGuard } from "../../../core/auth/guards/jwt-auth.guard";

export interface IDataResult {
    ids: number[];
    count: number;
    data: {
        [key:string]: IPost
    };
}

@Controller('post')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get('all')
    getPosts(): Promise<PostEntity[]> {
        return this.postService.findAll()
    }

    @Get(':id')
    getPostById(@Param() params: any): Promise<PostEntity> {
        return this.postService.findById(params.id);
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async create(@Body() postData: PostEntity): Promise<any> {
        return this.postService.create(postData);
    }
}
