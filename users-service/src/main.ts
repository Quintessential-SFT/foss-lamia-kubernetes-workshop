import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import { getUserProtoPath } from '@foss/grpc';

async function bootstrap() {
    const app = await NestFactory.createMicroservice(AppModule,
        {
            transport: Transport.GRPC,
            options: {
                protoPath: getUserProtoPath(),
                package: 'users'
            }
        });
    await app.listen(() => {
        console.log('Users microservice listening');
    });
}

bootstrap();
