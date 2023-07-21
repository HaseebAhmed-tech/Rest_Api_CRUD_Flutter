import { Module } from '@nestjs/common';
import { RecentsService } from './recents.service';
import { RecentsController } from './recents.controller';
import { PrismaModule } from 'src/prisma/prisma.module'

@Module({
  controllers: [RecentsController],
  providers: [RecentsService],
  imports: [PrismaModule]
})
export class RecentsModule {}
