import { Jugador } from 'src/jugador/entities/jugador.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class VideoJugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  nombre: string;

  @Column({ type: 'varchar' })
  url: string;

  @ManyToOne(() => Jugador, (jugador) => jugador.videosJugador, {
    onDelete: 'CASCADE',
  })
  jugador: Jugador;
}
