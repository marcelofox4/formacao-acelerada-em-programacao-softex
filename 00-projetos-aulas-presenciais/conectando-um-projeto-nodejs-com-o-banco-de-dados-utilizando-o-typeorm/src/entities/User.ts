import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("usuarios")
class User {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column("varchar", { length: 50, nullable: false })
    nome: string;

    constructor() {}
}

export { User };