import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('post')
export class PostEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column('text')
    post?: string;

    @Column('int')
    votes?: number;

    @Column('varchar')
    header?: string;

    @Column('varchar')
    tags?: string;

    @CreateDateColumn()
    time?: Date;

    @Column('varchar')
    icon?: string;
}
