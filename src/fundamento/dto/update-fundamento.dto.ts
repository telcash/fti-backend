import { PartialType } from '@nestjs/mapped-types';
import { CreateFundamentoDto } from './create-fundamento.dto';

export class UpdateFundamentoDto extends PartialType(CreateFundamentoDto) {}
