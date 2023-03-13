import { Module } from '@nestjs/common';
import { EventController } from './event.controller';
import { EventGateway } from './event.gateway';

@Module({
  imports: [],
  providers: [EventGateway],
})
export class EventModule {}
