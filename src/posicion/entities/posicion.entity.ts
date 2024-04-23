import { Jugador } from 'src/jugador/entities/jugador.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Posicion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(() => Jugador, (jugador) => jugador.equipo)
  jugadores: Jugador[];
}
