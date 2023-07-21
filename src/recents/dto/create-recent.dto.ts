import { ApiProperty } from "@nestjs/swagger";
import {
    IsBoolean,
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
    IsInt
  } from 'class-validator';
export class CreateRecentDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    @MaxLength(12)
    @ApiProperty()
    status: string

    @IsString()
    @MaxLength(40)
    @ApiProperty({required: false})
    text?: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default: "img/images1.jpeg"})
    img: string = "img/images1.jpeg"

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    time: string
}
