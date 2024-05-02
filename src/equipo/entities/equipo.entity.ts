import { Jugador } from 'src/jugador/entities/jugador.entity';
import { Partido } from 'src/partido/entities/partido.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ type: 'varchar', nullable: true })
  foto: string;

  @OneToMany(() => Jugador, (jugador) => jugador.equipo)
  jugadores: Jugador[];

  @OneToMany(() => Partido, (partido) => partido.equipoLocal)
  partidosLocal: Partido[];

  @OneToMany(() => Partido, (partido) => partido.equipoVisitante)
  partidosVisitante: Partido[];
}
