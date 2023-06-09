import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Board extends BaseEntity {
    @PrimaryGeneratedColumn()
    boardCd: number

    @Column()
    title: string

    @Column()
    content: string

    @Column()
    regDt: string

    @Column()
    writer: number

    @Column()
    hit: number


    // static findByName(firstName: string, lastName: string) {
    //     return this.createQueryBuilder("user")
    //         .where("user.firstName = :firstName", { firstName })
    //         .andWhere("user.lastName = :lastName", { lastName })
    //         .getMany()
    // }
}