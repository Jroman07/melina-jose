import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
  } from "typeorm";
  
@Entity('header')
export class Header {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ nullable: true }) // Permite que image sea opcional
  image: string;
}
