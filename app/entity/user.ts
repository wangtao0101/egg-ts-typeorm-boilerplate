import { Column, Entity } from 'typeorm';

@Entity()
export class User {

    @Column('int', {
        nullable: false,
        primary: true,
    })
    id: number;

    @Column('character varying', {
        nullable: false,
        length: 100,
    })
    name: string;
}
