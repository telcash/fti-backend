import { Equipo } from 'src/equipo/entities/equipo.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Posicion } from 'src/posicion/entities/posicion.entity';
import { SesionIndividual } from 'src/sesion-individual/entities/sesion-individual.entity';
import { JugadorToPartido } from 'src/jugador-to-partido/entities/jugador-to-partido.entity';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ type: 'varchar', length: 40 })
  apellido: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  apodo: string;

  @Column({ type: 'date', nullable: true })
  fNac: Date;

  @Column({ type: 'float', nullable: true })
  peso: number;

  @Column({ type: 'float', nullable: true })
  altura: number;

  @Column({ type: 'varchar', nullable: true })
  telefono: string;

  @Column({ type: 'varchar', nullable: true })
  nacionalidad: string;

  @Column({ type: 'date', nullable: true })
  iniContrato: Date;

  @Column({ type: 'date', nullable: true })
  finContrato: Date;

  @Column({ type: 'varchar', nullable: true })
  foto: string;

  @Column({ type: 'float', default: 0 })
  posX: number;

  @Column({ type: 'float', default: 0 })
  posY: number;

  @ManyToOne(() => Posicion, (posicion) => posicion.jugadores, {
    onDelete: 'SET NULL',
  })
  posicion: Posicion;

  @ManyToOne(() => Equipo, (equipo) => equipo.jugadores, {
    onDelete: 'SET NULL',
  })
  equipo: Equipo;

  @OneToMany(
    () => JugadorToPartido,
    (jugadorToPartido) => jugadorToPartido.jugador,
  )
  public jugadorToPartidos: JugadorToPartido[];

  @OneToMany(
    () => SesionIndividual,
    (sesionIndividual) => sesionIndividual.jugador,
  )
  sesionesIndividuales: SesionIndividual[];
}
