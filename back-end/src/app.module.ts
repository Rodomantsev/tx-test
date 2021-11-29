import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { AllModule } from "./modules/all.module";
import { AuthModule } from "./core/auth/auth.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'database.db',
            synchronize: true,
            entities: [__dirname + '/**/entites/*.entity{.ts,.js}'],
        }),
        AllModule,
        AuthModule
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
