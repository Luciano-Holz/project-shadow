import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BadRequestError } from 'src/errors/BadRequestError';
import { NotFoundError } from 'src/errors/notfoundError';
import { Wallet } from 'src/model/wallet.entity';
import { CreateWalletDto } from 'src/validation/wallet/createWallet.dto';
import { UpdateWalletDto } from 'src/validation/wallet/updateWallet.dto';
import { Repository } from 'typeorm';
import { validateCpf } from '../helpers/validateCpf';

export type WalletType = object;

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet)
    private walletRepository: Repository<Wallet>,
  ) {}

  async create(createWalletDto: CreateWalletDto): Promise<Wallet> {
    const walletCpf = validateCpf(createWalletDto.cpf);
    console.log(walletCpf);
    if (!walletCpf) throw new BadRequestError();
    const newWallet = this.walletRepository.create(createWalletDto);
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
