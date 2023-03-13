import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventModule } from './event/event.module';
import { BoardModule } from './board/board.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {DBInfo} from "../DBInfo";

@Module({
  imports: [
      EventModule,
      BoardModule,
      TypeOrmModule.forRoot(DBInfo),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
