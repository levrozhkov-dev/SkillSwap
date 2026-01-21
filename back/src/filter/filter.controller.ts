import { Body, Controller, Post } from '@nestjs/common';
import { FilterService } from './filter.service';
import { GetUsersFilterDto } from './filterDTO';

@Controller('filter')
export class FilterController {
  constructor(private readonly filterService: FilterService) {}

  @Post() // меняем @Get на @Post
  getUsers(@Body() filterDto: GetUsersFilterDto) {
    // вместо @Query используем @Body
    return this.filterService.getUsers(filterDto);
  }
}
