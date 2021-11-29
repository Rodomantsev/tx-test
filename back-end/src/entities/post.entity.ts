import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    title: string;
    @Column()
    author: string;
    @Column()
    category: string;
    @Column()
    text: string;
    @Column()
    date: string;
    @Column()
    imgBig: string;
    @Column()
    imgSmall: string;
    @Column()
    description: string;

}
