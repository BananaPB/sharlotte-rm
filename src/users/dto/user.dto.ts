import { Exclude, Expose, Transform } from 'class-transformer';

@Exclude()
export class UserDto {
    @Expose()
    id: string;

    @Expose()
    username: string;

    @Expose()
    email: string;

    @Exclude()
    password: string;

    @Expose()
    @Transform(({ value }) => {
        if (value) {
            return new Date(value).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
        }
        return value;
    })
    createdAt: Date;
    
    @Expose()
    @Transform(({ value }) => {
        if (value) {
            return new Date(value).toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
        }
        return value;
    })
    updatedAt: Date;
} 