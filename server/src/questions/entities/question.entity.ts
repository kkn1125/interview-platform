import { DateColumnEntity } from '@common/date-column.entity';
import { User } from '@src/users/entities/user.entity';
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

@Entity()
export class Question extends BaseEntity implements DateColumnEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  ask!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  @ManyToOne(() => User, (user) => user.questions)
  user!: User;
}
