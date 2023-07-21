import { Injectable } from '@nestjs/common';
import { CreateRecentDto } from './dto/create-recent.dto';
import { UpdateRecentDto } from './dto/update-recent.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecentsService {
  constructor(private prisma: PrismaService){}

  create(createRecentDto: CreateRecentDto) {
    return this.prisma.recents.create({data: createRecentDto});
  }

  findAll() {
    return this.prisma.recents.findMany();
  }

  findOne(id: number) {
    return this.prisma.recents.findUnique({where:{id}});
  }

  update(id: number, updateRecentDto: UpdateRecentDto) {
    return this.prisma.recents.update({where: {id}, data:updateRecentDto});
  }

  remove(id: number) {
    return this.prisma.recents.delete({where: {id}});
  }
}
