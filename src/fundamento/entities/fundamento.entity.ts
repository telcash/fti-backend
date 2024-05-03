import { Ejercicio } from 'src/ejercicio/entities/ejercicio.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fundamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ type: 'enum', enum: ['Defensivo', 'Ofensivo'] })
  tipo: string;

  @OneToMany(() => Ejercicio, (ejercicio) => ejercicio.fundamento)
  ejercicios: Ejercicio[];
}
