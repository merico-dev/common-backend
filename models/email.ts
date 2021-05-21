import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import BaseModel from './baseModel';

@Entity('emails', { schema: 'public' })
@Index('emails_email_key', ['email'], { unique: true })
export default class Email extends BaseModel {
  @Column({ name: 'user_id', nullable: true })
  user_id: string;

  @Column('character varying', {
    nullable: false,
    primary: true,
    length: 255,
    name: 'email'
  })
  email: string;

  @Column('boolean', {
    nullable: false,
    name: 'is_primary'
  })
  is_primary: boolean;

  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'create_time'
  })
  create_time: Date;

  @Column('timestamp with time zone', {
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
    name: 'update_time'
  })
  update_time: Date;
}
