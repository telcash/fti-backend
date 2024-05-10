import { Equipo } from 'src/equipo/entities/equipo.entity';
import { JugadorToPartido } from 'src/jugador-to-partido/entities/jugador-to-partido.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'int', nullable: true })
  golesLocal: number;

  @Column({ type: 'int', nullable: true })
  golesVisitante: number;

  @ManyToOne(() => Equipo, (equipoLocal) => equipoLocal.partidosLocal, {
    onDelete: 'SET NULL',
  })
  equipoLocal: Equipo;

  @ManyToOne(
    () => Equipo,
    (equipoVisitante) => equipoVisitante.partidosVisitante,
    { onDelete: 'SET NULL' },
  )
  equipoVisitante: Equipo;

  @OneToMany(
    () => JugadorToPartido,
    (jugadorToPartido) => jugadorToPartido.partido,
  )
  public jugadorToPartidos: JugadorToPartido[];
}
