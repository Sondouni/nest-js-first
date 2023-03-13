import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("gookie", { schema: "gookie" })
export class Gookie {
  @PrimaryGeneratedColumn({ type: "bigint", name: "gookie_id" })
  gookieId: string;

  @Column("text", { name: "tel_no", nullable: true })
  telNo: string | null;

  @Column("text", { name: "bth_gbn_nm", nullable: true })
  bthGbnNm: string | null;

  @Column("text", { name: "assem_addr", nullable: true })
  assemAddr: string | null;

  @Column("text", { name: "hj_nm", nullable: true })
  hjNm: string | null;

  @Column("text", { name: "hg_nm", nullable: true })
  hgNm: string | null;

  @Column("text", { name: "bth_date", nullable: true })
  bthDate: string | null;

  @Column("text", { name: "elect_gbn_nm", nullable: true })
  electGbnNm: string | null;

  @Column("text", { name: "poly_nm", nullable: true })
  polyNm: string | null;

  @Column("text", { name: "reele_gbn_nm", nullable: true })
  reeleGbnNm: string | null;

  @Column("text", { name: "cmits", nullable: true })
  cmits: string | null;

  @Column("longtext", { name: "mem_title", nullable: true })
  memTitle: string | null;

  @Column("text", { name: "eng_nm", nullable: true })
  engNm: string | null;

  @Column("text", { name: "sex_gbn_nm", nullable: true })
  sexGbnNm: string | null;

  @Column("text", { name: "e_mail", nullable: true })
  eMail: string | null;

  @Column("text", { name: "mona_cd", nullable: true })
  monaCd: string | null;

  @Column("text", { name: "selectary2", nullable: true })
  selectary2: string | null;

  @Column("text", { name: "job_res_nm", nullable: true })
  jobResNm: string | null;

  @Column("text", { name: "staff", nullable: true })
  staff: string | null;

  @Column("text", { name: "homepage", nullable: true })
  homepage: string | null;

  @Column("text", { name: "cmit_nm", nullable: true })
  cmitNm: string | null;

  @Column("text", { name: "selectary", nullable: true })
  selectary: string | null;

  @Column("text", { name: "orig_nm", nullable: true })
  origNm: string | null;

  @Column("text", { name: "unuts", nullable: true })
  unuts: string | null;
}
