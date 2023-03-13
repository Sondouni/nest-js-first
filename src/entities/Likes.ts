import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("likes", { schema: "gookie" })
export class Likes {
  @PrimaryGeneratedColumn({ type: "bigint", name: "likes_id" })
  likesId: string;

  @Column("bigint", { name: "reply_id", nullable: true })
  replyId: string | null;

  @Column("bigint", { name: "member_id", nullable: true })
  memberId: string | null;

  @Column("tinyint", {
    name: "likes_type",
    nullable: true,
    default: () => "'0'",
  })
  likesType: number | null;
}
