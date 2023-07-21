import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { RecentsService } from './recents.service';
import { CreateRecentDto } from './dto/create-recent.dto';
import { UpdateRecentDto } from './dto/update-recent.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Recent } from './entities/recent.entity';


@Controller('recents')
@ApiTags('recents')
export class RecentsController {
  constructor(private readonly recentsService: RecentsService) {}

  @Post()
  @ApiCreatedResponse({type: Recent})
  create(@Body() createRecentDto: CreateRecentDto) {
    return this.recentsService.create(createRecentDto);
  }

  @Get()
  @ApiOkResponse({type: Recent})
  findAll() {
    return this.recentsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({type:Recent})
  findOne(@Param('id') id: string) {
    return this.recentsService.findOne(+id);
  }

  @Patch(':id')
  @ApiCreatedResponse({type:Recent})
  update(@Param('id') id: string, @Body() updateRecentDto: UpdateRecentDto) {
    return this.recentsService.update(+id, updateRecentDto);
  }

  @Delete(':id')
  @ApiOkResponse({type:Recent})
  remove(@Param('id') id: string) {
    return this.recentsService.remove(+id);
  }
}
