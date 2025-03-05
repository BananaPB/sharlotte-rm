import { IsDate, IsEmail, IsString, IsStrongPassword, IsUUID } from "class-validator";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    @IsString()
    username: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    password: string;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}