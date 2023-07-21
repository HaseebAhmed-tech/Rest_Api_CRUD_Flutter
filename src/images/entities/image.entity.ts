import { Images } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
export class Image implements Images{
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    status: string;

    @ApiProperty({required: false, nullable: true})
    text: string | null;

    @ApiProperty()
    img: string

    @ApiProperty()
    time: string

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    uodatedAt: Date;


}

