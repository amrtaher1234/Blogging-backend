import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkEntity } from './work.entity';
import { Repository } from 'typeorm';

@Injectable()
export class WorkService {
    constructor(
        @InjectRepository(WorkEntity) private readonly workRepository: Repository<WorkEntity>,
    ) {
    }
    async findAll() {
        try {
            return await this.workRepository.find({});
        } catch (err) {
            return err;
        }
    }
    async findById(id): Promise<WorkEntity> {
        try {
            return await this.workRepository.findOne(id);
        } catch (err) {
            return err;
        }
    }
    async addWork(work: WorkEntity) {
        try {
            return await this.workRepository.save(work);
        } catch (err) {
            return err;
        }
    }
}
