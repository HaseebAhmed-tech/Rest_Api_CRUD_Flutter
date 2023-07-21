import { Injectable } from '@nestjs/common';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class DetailsService {
  constructor(private prisma: PrismaService) {}
  create(createDetailDto: CreateDetailDto) {
    return this.prisma.details.create({data:createDetailDto});
  }

  findAll() {
    return this.prisma.details.findMany();
  }

  findOne(id: number) {
    return this.prisma.details.findUnique({ where: { id }});
  }

  update(id: number, updateDetailDto: UpdateDetailDto) {
    return this.prisma.details.update({
      where: { id },
      data: updateDetailDto,
    });;
  }

  remove(id: number) {
    return this.prisma.details.delete({ where: { id } });
  }
}
