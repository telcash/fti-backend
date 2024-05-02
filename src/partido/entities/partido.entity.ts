import { Equipo } from 'src/equipo/entities/equipo.entity';
import { JugadorToPartido } from 'src/jugador-to-partido/entities/jugador-to-partido.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
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

  @ManyToOne(() => Equipo, (equipoLocal) => equipoLocal.partidosLocal)
  equipoLocal: Equipo;

  @ManyToOne(
    () => Equipo,
    (equipoVisitante) => equipoVisitante.partidosVisitante,
  )
  equipoVisitante: Equipo;

  @OneToMany(
    () => JugadorToPartido,
    (jugadorToPartido) => jugadorToPartido.partido,
  )
  public jugadorToPartidos: JugadorToPartido[];
}
