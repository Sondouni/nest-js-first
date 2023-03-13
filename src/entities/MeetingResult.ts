import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity("meetingResult", { schema: "gookie" })
export class MeetingResult {
  @PrimaryGeneratedColumn({ type: "int", name: "mrCd" })
  mrCd: number;

  @Column("varchar", { name: "mona_cd", nullable: true, length: 50 })
  monaCd: string | null;

  @Column("varchar", { name: "result", nullable: true, length: 50 })
  result: string | null;
}
