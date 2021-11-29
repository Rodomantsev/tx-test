import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
export class PostEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    tags: string;

    // @ManyToOne(type => User, client => client.children, { eager: false })
    // @JoinColumn()
    @Column({nullable: true})
    author: string;

    @Column({nullable: true})
    description: string;

    @Column({nullable: true})
    text: string;

    @Column({nullable: true})
    seoKeywords: string;

    @CreateDateColumn({ type:  'datetime' })
    created?: Date

    @UpdateDateColumn({ type:  'datetime' })
    updated?: Date

    @Column({nullable: true})
    category: string;

    @Column({nullable: true})
    date: string;

    @Column({nullable: true})
    imgBig: string;
    @Column({nullable: true})
    imgSmall: string;
}

export class IPost {
    id: number;
    title: string;
    tags: string[];

    author?: string;
    description: string;
    created?: Date;
    updated?: Date;
}
