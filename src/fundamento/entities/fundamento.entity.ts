import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Fundamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 30 })
  nombre: string;

  @Column({ type: 'enum', enum: ['Defensivo', 'Ofensivo'] })
  tipo: string;
}
