import { Column, Entity, PrimaryGeneratedColumn, Timestamp } from 'typeorm';

@Entity()
export class Notificacion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'timestamp', nullable: true })
  fecha: Timestamp;
}
