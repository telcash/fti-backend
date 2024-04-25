import { Equipo } from 'src/equipo/entities/equipo.entity';
import { JugadorToPartido } from 'src/jugador-to-partido/entities/jugador-to-partido.entity';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'varchar' })
  resultado: string;

  @OneToOne(() => Equipo)
  @JoinColumn()
  equipoLocal: Equipo;

  @OneToOne(() => Equipo)
  @JoinColumn()
  equipoVisitante: Equipo;

  @OneToMany(
    () => JugadorToPartido,
    (jugadorToPartido) => jugadorToPartido.partido,
  )
  public jugadorToPartidos: JugadorToPartido[];
}
