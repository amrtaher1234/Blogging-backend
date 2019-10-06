import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {

    }
    @Get()
    async getAllUsers() {
        return await this.userService.getAll();
    }
    @Post('/register')
    async register(@Body() body) {
        return await this.userService.register(body);
    }
    @Post('/login')
    async login(@Body() body) {
        return await this.userService.login(body);
    }
}
