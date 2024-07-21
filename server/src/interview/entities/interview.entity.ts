import { DateColumnEntity } from '@common/date-column.entity';
import { Answer } from '@src/answer/entities/answer.entity';
import { User } from '@src/users/entities/user.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Interview extends BaseEntity implements DateColumnEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  @ManyToOne(() => User, (user) => user.interviews)
  user!: User;

  @ManyToMany(() => Answer, (answer) => answer.interviews)
  @JoinTable({ name: 'interview_answer' })
  answers!: Answer[];
}
