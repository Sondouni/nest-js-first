import { Injectable } from '@nestjs/common';
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {Board} from "../entities/Board";
import {BoardEntity} from "../entities/BoardEntity";

@Injectable()
export class BoardService {
  constructor(
      @InjectRepository(BoardEntity) private boardRepository: Repository<BoardEntity>,
  ) {
    this.boardRepository = boardRepository;
  }
  getHello(): string {
    return 'This gonna be board list';
  }
  getBoardList(): any {
    return this.boardRepository.find();
  }
}
