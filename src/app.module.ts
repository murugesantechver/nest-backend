import { Module } from '@nestjs/common';
import { UsersModule } from './features/users/users.module';
import { TestEnvModule } from './features/test-env/test-env.module';

@Module({
  imports: [
    //authentication and authorization modules, Ex: auth , roles , permissions etc

    //infrastructure modules , Ex : database, cache , queue , logging etc

    //feature modules , Ex : users , products , orders etc
    UsersModule,

    //test and trial modules , Ex : test-env etc
    TestEnvModule,
  ],
})
export class AppModule {}
