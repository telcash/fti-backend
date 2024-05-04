import { Fundamento } from 'src/fundamento/entities/fundamento.entity';
import { SesionIndividual } from 'src/sesion-individual/entities/sesion-individual.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ejercicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  valoracion: number;

  @ManyToOne(() => Fundamento, (fundamento) => fundamento.ejercicios, {
    onDelete: 'CASCADE',
  })
  fundamento: Fundamento;

  @ManyToOne(
    () => SesionIndividual,
    (sesionIndividual) => sesionIndividual.ejercicios,
    {
      onDelete: 'CASCADE',
    },
  )
  sesionIndividual: SesionIndividual;
}
