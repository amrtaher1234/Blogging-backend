import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [TypeOrmModule.forRoot(), PostModule, UserModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
