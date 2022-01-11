import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletModule } from './wallet.module';

@Module({
  imports: [TypeOrmModule.forRoot(), WalletModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
