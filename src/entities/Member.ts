import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("member", { schema: "gookie" })
export class Member {
  @PrimaryGeneratedColumn({ type: "bigint", name: "member_id" })
  memberId: string;

  @Column("varchar", { name: "member_login_id", length: 100 })
  memberLoginId: string;

  @Column("varchar", { name: "member_login_pw", length: 255 })
  memberLoginPw: string;

  @Column("varchar", { name: "member_name", length: 20 })
  memberName: string;

  @Column("varchar", {
    name: "member_role",
    length: 20,
    default: () => "'MEMBER'",
  })
  memberRole: string;

  @Column("datetime", {
    name: "member_create_date",
    default: () => "CURRENT_TIMESTAMP",
  })
  memberCreateDate: Date;

  @Column("datetime", {
    name: "member_modify_date",
    default: () => "CURRENT_TIMESTAMP",
  })
  memberModifyDate: Date;
}
