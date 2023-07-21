import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { DetailsService } from './details.service';
import { CreateDetailDto } from './dto/create-detail.dto';
import { UpdateDetailDto } from './dto/update-detail.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Detail } from './entities/detail.entity';

@Controller('details')
@ApiTags('deatails')

export class DetailsController {
  constructor(private readonly detailsService: DetailsService) {}
  
  @Post()
  @ApiCreatedResponse({type: Detail })
  create(@Body() createDetailDto: CreateDetailDto) {
    return this.detailsService.create(createDetailDto);
  }

  @Get()
  @ApiOkResponse({type:Detail})
  findAll() {
    return this.detailsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type:Detail})
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.detailsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({type:Detail})
  update(@Param('id', ParseIntPipe) id: number, @Body() updateDetailDto: UpdateDetailDto) {
    return this.detailsService.update(+id, updateDetailDto);
  }

  @Delete(':id')
  @ApiOkResponse({type:Detail})
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.detailsService.remove(+id);
  }
}
