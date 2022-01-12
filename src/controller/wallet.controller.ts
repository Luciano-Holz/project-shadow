import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { JoiPipe } from 'nestjs-joi';
import { Wallet } from 'src/model/wallet.entity';
import { WalletService } from 'src/service/wallet.service';

@Controller('api/v1/wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Post()
  async create(@Body(JoiPipe) wallet: Wallet) {
    return this.walletService.create(wallet);
  }

  @Get()
  async findAll() {
    return this.walletService.findAll();
  }
}
