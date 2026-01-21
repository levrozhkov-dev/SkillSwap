import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FilterModule } from './filter/filter.module';
import { CitiesModule } from './city/city.module';

@Module({
  imports: [UserModule, FilterModule, CitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
