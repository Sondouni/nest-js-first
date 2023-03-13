import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("congress_reply", { schema: "gookie" })
export class CongressReply {
  @PrimaryGeneratedColumn({ type: "bigint", name: "congress_reply_id" })
  congressReplyId: string;

  @Column("tinyint", { name: "congress_reply_status", default: () => "'1'" })
  congressReplyStatus: number;

  @Column("bigint", { name: "reply_id", nullable: true, default: () => "'0'" })
  replyId: string | null;

  @Column("bigint", { name: "member_id", nullable: true, default: () => "'0'" })
  memberId: string | null;

  @Column("text", { name: "congress_reply_content", nullable: true })
  congressReplyContent: string | null;

  @Column("int", {
    name: "congress_reply_index",
    nullable: true,
    default: () => "'0'",
  })
  congressReplyIndex: number | null;

  @Column("datetime", {
    name: "congress_reply_create_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  congressReplyCreateDate: Date | null;

  @Column("datetime", {
    name: "congress_reply_modify_date",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  congressReplyModifyDate: Date | null;
}
