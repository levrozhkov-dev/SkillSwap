import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FilterModule } from './filter/filter.module';

@Module({
  imports: [UserModule, FilterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
