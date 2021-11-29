import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPost, PostEntity } from "../entites/post.entity";
import { IDataResult } from "../controllers/post.controller";

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity)
        private readonly postRepository: Repository<PostEntity>
    ) {}
    async findAll(): Promise<PostEntity[]> {
        return await this.postRepository.find()
            // .then(this.convertTags)
            // .then(posts => {
            //     const result: IDataResult = {
            //         ids: [],
            //         count: 0,
            //         data: {}
            //     };
            //     for (const post of posts) {
            //         result.ids.push(post.id);
            //         result.data[post.id] = post;
            //     }
            //     result.count = result.ids.length;
            //     return result;
            // });
    }

    async findById(id: number): Promise<PostEntity> {
        return await this.postRepository.findOne({ id: id })
            // .then(this.convertTags);
        // return result[0];
    }

    async  create(post: PostEntity): Promise<PostEntity> {
        return await this.postRepository.save(post);
    }

    convertTags(posts): any {
        return posts.map(post => {
            if (post.tags.indexOf(',') === -1) {
                return {...post, tags: [post.tags]}
            }
            return {...post, tags: post.tags.split(',')};
        });
    }
}
