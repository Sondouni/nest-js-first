import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("board", { schema: "gookie" })
export class Board {
  @PrimaryGeneratedColumn({ type: "int", name: "boardCd" })
  boardCd: number;

  @Column("int", { name: "writer" })
  writer: number;

  @Column("int", { name: "hit" })
  hit: number;

  @Column("varchar", { name: "title", length: 255 })
  title: string;

  @Column("varchar", { name: "content", length: 255 })
  content: string;

  @Column("varchar", { name: "regDt", length: 255 })
  regDt: string;
}
