import { Controller, Get, Param, Post, Body, Delete, Patch, Put } from '@nestjs/common';
import { PostService } from './post.service';
import { IPost } from './models/postModel';
import { PostEntity } from './post.entity';

@Controller('post')
export class PostController {

    constructor(private readonly postService: PostService) {
    }
    @Get()
    async findAll(): Promise<PostEntity[]> {
        return await this.postService.findAll() as PostEntity[];
    }
    @Get(':id')
    async findWithId(@Param() params): Promise<PostEntity> {
        try {
            const res = await this.postService.findById(params.id);
            return res;
        } catch (err) {
            return err;
        }
    }
    @Post()
    async addPost(@Body() body: PostEntity) {
        return await this.postService.addPost(body);
    }
    @Put()
    async updatePost(@Body() body: IPost) {
        return await this.postService.addPost(body);
    }
    @Delete(':id')
    async delete(@Param() param) {
        return await this.postService.delete(param.id);
    }
    @Delete()
    async deleteAll() {
        return await this.postService.deleteAll();
    }
}
