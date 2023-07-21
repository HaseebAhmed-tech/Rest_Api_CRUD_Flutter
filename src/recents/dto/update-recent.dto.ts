import { PartialType } from '@nestjs/swagger';
import { CreateRecentDto } from './create-recent.dto';

export class UpdateRecentDto extends PartialType(CreateRecentDto) {}
