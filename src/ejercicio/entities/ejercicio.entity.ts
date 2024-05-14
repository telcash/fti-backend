import { Fundamento } from 'src/fundamento/entities/fundamento.entity';
import { SesionIndividual } from 'src/sesion-individual/entities/sesion-individual.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Ejercicio {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  valoracion: number;

  @Column({ type: 'int' })
  valoracionMaxima: number;

  @Column({ type: 'int', nullable: true })
  valoracionFisica: number;

  @Column({ type: 'int', nullable: true })
  valoracionTecnica: number;

  @Column({ type: 'int', nullable: true })
  valoracionTactica: number;

  @Column({ type: 'int', nullable: true })
  valoracionPsicologica: number;

  @Column({ type: 'varchar', nullable: true })
  observaciones: string;

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
