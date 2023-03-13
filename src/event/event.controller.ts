import { Controller, Get } from '@nestjs/common';
import { EventGateway } from './event.gateway';

@Controller()
export class EventController {
  constructor(private readonly appService: EventGateway) {}

  @Get()
  getHello(): string {
    return 'test';
  }
}
