import { Global, Module } from '@nestjs/common';
import { ConfigModule as ConfModule } from '@nestjs/config';
import { getEnvPath } from './env.helper';

const envFilePath: string = getEnvPath(`${__dirname}/../..`);
@Global()
@Module({
  imports: [
    ConfModule.forRoot({
      isGlobal: true,
      envFilePath,
    }),
  ],
})
export class ConfigModule {}
