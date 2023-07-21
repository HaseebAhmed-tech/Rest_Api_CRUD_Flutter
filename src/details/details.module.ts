import { Module } from '@nestjs/common';
import { DetailsService } from './details.service';
import { DetailsController } from './details.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [DetailsController],
  providers: [DetailsService],
  imports:[PrismaModule]
})
export class DetailsModule {}
