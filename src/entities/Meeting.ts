import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("meeting", { schema: "gookie" })
export class Meeting {
  @PrimaryGeneratedColumn({ type: "int", name: "meetingCd" })
  meetingCd: number;

  @Column("varchar", { name: "BILL_NO", nullable: true, length: 500 })
  billNo: string | null;

  @Column("varchar", { name: "BILL_ID", nullable: true, length: 500 })
  billId: string | null;

  @Column("varchar", { name: "BILL_NAME", nullable: true, length: 500 })
  billName: string | null;

  @Column("varchar", { name: "COMMITTEE", nullable: true, length: 500 })
  committee: string | null;

  @Column("varchar", { name: "PROPOSE_DT", nullable: true, length: 500 })
  proposeDt: string | null;

  @Column("varchar", { name: "PROC_RESULT", nullable: true, length: 500 })
  procResult: string | null;

  @Column("varchar", { name: "AGE", nullable: true, length: 500 })
  age: string | null;

  @Column("varchar", { name: "DETAIL_LINK", nullable: true, length: 500 })
  detailLink: string | null;

  @Column("varchar", { name: "PROPOSER", nullable: true, length: 500 })
  proposer: string | null;

  @Column("varchar", { name: "MEMBER_LIST", nullable: true, length: 500 })
  memberList: string | null;

  @Column("varchar", { name: "RST_PROPOSER", nullable: true, length: 500 })
  rstProposer: string | null;

  @Column("varchar", { name: "PUBL_PROPOSER", nullable: true, length: 500 })
  publProposer: string | null;

  @Column("varchar", { name: "COMMITTEE_ID", nullable: true, length: 500 })
  committeeId: string | null;
}
