import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletController } from 'src/controller/wallet.controller';
import { Wallet } from 'src/model/wallet.entity';
import { WalletService } from 'src/service/wallet.service';

@Module({
  imports: [TypeOrmModule.forFeature([Wallet])],
  controllers: [WalletController],
  providers: [WalletService],
  exports: [WalletService],
})
export class WalletModule {}
