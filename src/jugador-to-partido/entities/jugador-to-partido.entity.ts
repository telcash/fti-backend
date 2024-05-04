import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Partido } from 'src/partido/entities/partido.entity';
import { Jugador } from 'src/jugador/entities/jugador.entity';

@Entity()
export class JugadorToPartido {
  @PrimaryGeneratedColumn()
  public jugadorToPartidoId: number;

  @Column()
  public convocado: boolean;

  @Column()
  public lesionado: boolean;

  @Column()
  public minJugados: number;

  @Column()
  public goles: number;

  @Column()
  public asistencias: number;

  @Column()
  public tarjetasAmarillas: number;

  @Column()
  public tarjetasRojas: number;

  @Column()
  public valoracion: number;

  @ManyToOne(() => Jugador, (jugador) => jugador.jugadorToPartidos, {
    onDelete: 'CASCADE',
  })
  public jugador: Jugador;

  @ManyToOne(() => Partido, (partido) => partido.jugadorToPartidos, {
    onDelete: 'CASCADE',
  })
  public partido: Partido;
}
