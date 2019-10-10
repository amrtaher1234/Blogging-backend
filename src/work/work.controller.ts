import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { WorkService } from './work.service';
import { WorkEntity } from './work.entity';

@Controller('work')
export class WorkController {
    constructor(private workService: WorkService) {

    }
    @Get()
    async findAll(): Promise<WorkEntity[]> {
        return await this.workService.findAll() as WorkEntity[];
    }
    @Get(':id')
    async findWithId(@Param() params): Promise<WorkEntity> {
        try {
            const res = await this.workService.findById(params.id);
            return res;
        } catch (err) {
            return err;
        }
    }
    @Post()
    async addPost(@Body() body: WorkEntity) {
        return await this.workService.addWork(body);
    }
}
