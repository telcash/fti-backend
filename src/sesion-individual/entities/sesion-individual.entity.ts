import { Ejercicio } from 'src/ejercicio/entities/ejercicio.entity';
import { Jugador } from 'src/jugador/entities/jugador.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SesionIndividual {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @ManyToOne(() => Jugador, (jugador) => jugador.sesionesIndividuales, {
    onDelete: 'CASCADE',
  })
  jugador: Jugador;

  @OneToMany(() => Ejercicio, (ejercicio) => ejercicio.sesionIndividual)
  ejercicios: Ejercicio[];
}
