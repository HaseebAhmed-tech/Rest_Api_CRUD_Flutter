import { Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ImagesService {
  constructor(private prisma: PrismaService){}
  create(createImageDto: CreateImageDto) {
    return this.prisma.images.create({data:createImageDto});
  }

  findAll() {
    return this.prisma.images.findMany();
  }

  findOne(id: number) {
    return this.prisma.images.findUnique({where: { id }});
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return this.prisma.images.update({where: { id }, data: updateImageDto});
  }

  remove(id: number) {
    return this.prisma.images.delete({ where: { id }});
  }
}
