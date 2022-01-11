import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['cpf'])
export class Wallet {
  @PrimaryGeneratedColumn()
  address: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  @ApiProperty()
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 14 })
  @ApiProperty()
  cpf: string;

  @Column({ nullable: false, type: 'varchar', length: 10 })
  @ApiProperty()
  birthdate: string;
}
