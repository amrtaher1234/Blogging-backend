import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity('work')
export class WorkEntity {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column('text')
    header?: string;

    @Column('text')
    text?: string;

    @Column('text')
    link?: string;

    @Column('varchar')
    genre?: string;

    @Column('varchar')
    image?: string;
}
