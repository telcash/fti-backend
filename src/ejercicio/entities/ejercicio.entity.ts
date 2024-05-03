import { Fundamento } from 'src/fundamento/entities/fundamento.entity';
import { SesionIndividual } from 'src/sesion-individual/entities/sesion-individual.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Ejercicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  valoracion: number;

  @ManyToOne(() => Fundamento, (fundamento) => fundamento.ejercicios)
  fundamento: Fundamento;

  @ManyToOne(
    () => SesionIndividual,
    (sesionIndividual) => sesionIndividual.ejercicios,
  )
  sesionIndividual: SesionIndividual;
}
