import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("reply", { schema: "gookie" })
export class Reply {
  @PrimaryGeneratedColumn({ type: "bigint", name: "reply_id" })
  replyId: string;

  @Column("int", { name: "member_id", nullable: true })
  memberId: number | null;

  @Column("varchar", { name: "mona_cd", nullable: true, length: 50 })
  monaCd: string | null;

  @Column("text", { name: "reply_content", nullable: true })
  replyContent: string | null;

  @Column("tinyint", { name: "reply_status", default: () => "'1'" })
  replyStatus: number;

  @Column("datetime", {
    name: "reply_create_date",
    default: () => "CURRENT_TIMESTAMP",
  })
  replyCreateDate: Date;

  @Column("datetime", {
    name: "reply_modify_date",
    default: () => "CURRENT_TIMESTAMP",
  })
  replyModifyDate: Date;
}
