import { Equipo } from 'src/equipo/entities/equipo.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Jugador {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ type: 'varchar', length: 40 })
  apellido: string;

  @Column({ type: 'varchar', length: 20 })
  apodo: string;

  @Column({ type: 'date' })
  fNac: Date;

  @Column({ type: 'date' })
  iniContrato: Date;

  @Column({ type: 'date' })
  finContrato: Date;

  @Column({ type: 'varchar' })
  foto: string;

  @ManyToOne(() => Equipo, (equipo) => equipo.jugadores)
  equipo: Equipo;
}
