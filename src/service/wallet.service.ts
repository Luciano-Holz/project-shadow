import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Wallet } from 'src/model/wallet.entity';
import { CreateWalletDto } from 'src/validation/wallet/createWallet.dto';
import { Repository } from 'typeorm';

export type WalletType = object;

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>,
  ) {}

  async create(CreateWalletDto: CreateWalletDto): Promise<Wallet> {
    const newWallet = this.walletRepository.create(CreateWalletDto);
    return this.walletRepository.save(newWallet);
  }

  async findAll() {
    return this.walletRepository.find();
  }

  async findOneById(address: string): Promise<Wallet> {
    return await this.walletRepository.findOneOrFail(address);
  }
}
