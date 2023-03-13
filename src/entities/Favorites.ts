import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("favorites", { schema: "gookie" })
export class Favorites {
  @PrimaryGeneratedColumn({ type: "int", name: "favorites_id" })
  favoritesId: number;

  @Column("int", { name: "member_id", nullable: true })
  memberId: number | null;

  @Column("varchar", { name: "mona_cd", nullable: true, length: 50 })
  monaCd: string | null;
}
