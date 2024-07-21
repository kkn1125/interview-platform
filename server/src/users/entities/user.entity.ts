import { DateColumnEntity } from '@common/date-column.entity';
import { Answer } from '@src/answer/entities/answer.entity';
import { Session } from '@src/auth/entities/session.entity';
import { Bundle } from '@src/bundles/entities/bundle.entity';
import { Interview } from '@src/interview/entities/interview.entity';
import { Question } from '@src/questions/entities/question.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class User extends BaseEntity implements DateColumnEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nickname!: string;

  @Column()
  password!: string;

  @Column()
  email!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date | null;

  @OneToMany(() => Profile, (profile) => profile.user)
  profiles!: Profile[];

  @OneToMany(() => Session, (session) => session.user)
  sessions!: Session[];

  @OneToMany(() => Question, (question) => question.user)
  questions!: Question[];

  @OneToMany(() => Bundle, (bundle) => bundle.user)
  bundles!: Bundle[];

  @OneToMany(() => Answer, (answer) => answer.user)
  answers!: Answer[];

  @OneToMany(() => Interview, (interview) => interview.user)
  interviews!: Interview[];
}
