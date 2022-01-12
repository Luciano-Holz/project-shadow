import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'src/errors/notfoundError';
import { Wallet } from 'src/model/wallet.entity';
import { CreateWalletDto } from 'src/validation/wallet/createWallet.dto';
import { UpdateWalletDto } from 'src/validation/wallet/updateWallet.dto';
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

  async update(
    address: string,
    updateteWalletDto: UpdateWalletDto,
  ): Promise<Wallet> {
    const wallet = await this.findOneById(address);
    this.walletRepository.merge(wallet, updateteWalletDto);
    return await this.walletRepository.save(wallet);
  }

  async remove(address: string): Promise<Wallet> {
    const wallet = await this.findOneById(address);
    if (!wallet) throw new NotFoundError();
    return await this.walletRepository.remove(wallet);
  }
}
