import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    BeforeInsert,
} from 'typeorm';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { Logger } from '@nestjs/common';

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @CreateDateColumn()
    created: Date;

    @Column({
        type: 'text',
    })
    username: string;

    @Column('text')
    password: string;

    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
        Logger.log(this.password, "before insertign");
    }

    async comparePassword(attempt: string): Promise<boolean> {
        return await bcrypt.compare(attempt, this.password);
    }

    toResponseObject(showToken: boolean = true): any {
        const { id, created, username, token } = this;
        const responseObject: any = {
            id,
            created,
            username,
        };

        if (showToken) {
            responseObject.token = token;
        }

        return responseObject;
    }

    private get token(): string {
        const { id, username } = this;

        return jwt.sign(
            {
                id,
                username,
            },
            process.env.SECRET,
            { expiresIn: '7d' },
        );
    }
}
