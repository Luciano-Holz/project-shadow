import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from 'src/model/wallet.entity';
import { Repository } from 'typeorm';

export type WalletType = object;

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>,
  ) {}

  async create(Wallet: Wallet): Promise<Wallet> {
    const newWallet = this.walletRepository.create(Wallet);
    return this.walletRepository.save(newWallet);
  }
}
