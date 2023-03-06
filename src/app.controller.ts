import { Controller, Get, Redirect } from '@nestjs/common';


@Controller()

export class AppController {
    constructor() {
        return;
    }


    @Get()
    @Redirect('/api')
    index() {
        return;
    }

}
