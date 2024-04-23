import { Equipo } from 'src/equipo/entities/equipo.entity';
import { JugadorToPartido } from 'src/jugador/entities/jugadorToPartido';
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Partido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: Date;

  @Column()
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
