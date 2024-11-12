import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('LandingService')
export class LandingService {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    icons: string;

    @Column()
    tittle: string;

    @Column()
    description: string;
}
