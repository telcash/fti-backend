import { Equipo } from 'src/equipo/entities/equipo.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { JugadorToPartido } from './jugadorToPartido';
import { Posicion } from 'src/posicion/entities/posicion.entity';
import { SesionIndividual } from 'src/sesion-individual/entities/sesion-individual.entity';

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

  @Column({ type: 'date', nullable: true })
  iniContrato: Date;

  @Column({ type: 'date', nullable: true })
  finContrato: Date;

  @Column({ type: 'varchar', nullable: true })
  foto: string;

  @ManyToOne(() => Posicion, (posicion) => posicion.jugadores)
  posicion: Posicion;

  @ManyToOne(() => Equipo, (equipo) => equipo.jugadores)
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
