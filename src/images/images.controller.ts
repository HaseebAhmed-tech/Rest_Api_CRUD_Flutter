import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ImagesService } from './images.service';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Image } from './entities/image.entity';

@Controller('images')
@ApiTags('images')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}

  @Post()
  @ApiCreatedResponse({type: Image})

  create(@Body() createImageDto: CreateImageDto) {
    return this.imagesService.create(createImageDto);
  }

  @Get()
  @ApiOkResponse({type: Image})

  findAll() {
    return this.imagesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type: Image})

  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.imagesService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({type: Image})

  update(@Param('id', ParseIntPipe) id: number, @Body() updateImageDto: UpdateImageDto) {
    return this.imagesService.update(+id, updateImageDto);
  }

  @Delete(':id')
  @ApiOkResponse({type:Image})

  remove(@Param('id', ParseIntPipe) id: number) {
    return this.imagesService.remove(+id);
  }
}
