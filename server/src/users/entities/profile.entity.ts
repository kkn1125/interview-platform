import { DateColumnEntity } from '@common/date-column.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Profile extends BaseEntity implements DateColumnEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number | null;

  @Column()
  image!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  @ManyToOne(() => User, (user) => user.profiles)
  user!: User;
}
