import { DateColumnEntity } from '@common/date-column.entity';
import { Question } from '@src/questions/entities/question.entity';
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
export class Bundle extends BaseEntity implements DateColumnEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: true })
  userId!: number;

  @Column()
  name!: string;

  @Column({ type: 'text', nullable: true })
  desc!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn({ nullable: true })
  deletedAt!: Date;

  @ManyToOne(() => User, (user) => user.bundles)
  user!: User;

  @ManyToMany(() => Question, (question) => question.bundles)
  @JoinTable({ name: 'bundle_question' })
  questions!: Question[];
}
