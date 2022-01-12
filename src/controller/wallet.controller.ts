import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse } from '@nestjs/swagger';
import { JoiPipe } from 'nestjs-joi';
import { Wallet } from 'src/model/wallet.entity';
import { WalletService } from 'src/service/wallet.service';
import { CreateWalletDto } from 'src/validation/wallet/createWallet.dto';
import { UpdateWalletDto } from 'src/validation/wallet/updateWallet.dto';

@Controller('api/v1/wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @ApiCreatedResponse()
  @ApiBadRequestResponse()
  @Post()
  async create(@Body(JoiPipe) createWalletDto: CreateWalletDto) {
    return this.walletService.create(createWalletDto);
  }

  @Get()
  async findAll() {
    return this.walletService.findAll();
  }

  @ApiOkResponse({ type: Wallet })
  @Get(':address')
  findOne(@Param() address: string) {
    return this.walletService.findOneById(address);
  }

  @ApiOkResponse({ type: Wallet })
  @Put(':address')
  update(
    @Param() address: string,
    @Body(JoiPipe) updateWalletDto: UpdateWalletDto,
  ) {
    return this.walletService.update(address, updateWalletDto);
  }

  @ApiOkResponse({ type: Wallet })
  @ApiNotFoundResponse()
  @Delete(':address')
  remove(@Param('address') address: string) {
    return this.walletService.remove(address);
  }
}
