import { Module } from '@nestjs/common';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';

@Module({
    imports: [TypeOrmModule.forFeature([PostEntity])],
    exports: [PostService],
    providers: [PostService],
    controllers: [PostController],
})
export class PostModule { }
