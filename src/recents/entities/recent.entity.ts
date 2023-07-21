import { Recents } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
export class Recent implements Recents{

    @ApiProperty()
    id: number;

    @ApiProperty()
    status: string;

    @ApiProperty({required:false, nullable: true})
    text: string | null;

    @ApiProperty()
    time: string;

    @ApiProperty()
    img: string;

    @ApiProperty()
    createdAt: Date;

    @ApiProperty()
    updatedAt: Date;



}
