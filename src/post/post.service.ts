import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
import { IPost } from './models/postModel';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(PostEntity) private readonly postRepository: Repository<PostEntity>) {

    }
    async findAll(): Promise<PostEntity[]> {
        try {
            return await this.postRepository.find({});
        } catch (err) {
            return err;
        }
    }
    async findById(id): Promise<PostEntity> {
        try {
            return await this.postRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }
    async addPost(post: PostEntity) {
        try {
            return await this.postRepository.save(post);
        } catch (err) {
            return err;
        }
    }

    async delete(id: string) {
        try {
            return await this.postRepository.delete(id);
        } catch (err) {
            return err;
        }
    }
    async deleteAll() {
        try {
            return await this.postRepository.clear();
        } catch (err) {
            return err;
        }
    }
}
