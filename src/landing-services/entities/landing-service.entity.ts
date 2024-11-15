import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity( {name: 'LandingServices'} )
export class LandingService {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    icons: string;

    @Column()
    tittle: string;

    @Column( { type: 'text' } )
    description: string;
}
