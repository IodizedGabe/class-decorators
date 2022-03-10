import { plainToClass } from 'class-transformer';

import { IsEnum } from '../is-enum';

describe('IsEnum', () => {

    enum FixtureEnum {
        Foo = 'Foo',
        Bar = 'Bar',
    }

    it('ignores properties that are not exposed', () => {
        class Fixture {
            property!: string;
        }

        const obj = plainToClass(Fixture, {});
        expect(obj).not.toHaveProperty('property');
    });
    it('populates missing required fields with undefined', () => {
        class Fixture {
            @IsEnum({
                enum: FixtureEnum,
            })
            property!: string;
        }

        const obj = plainToClass(Fixture, {});
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates null required fields with undefined', () => {
        class Fixture {
            @IsEnum({
                enum: FixtureEnum,
            })
            property!: string;
        }

        const obj = plainToClass(Fixture, {
            property: null,
        });
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates undefined required fields with undefined', () => {
        class Fixture {
            @IsEnum({
                enum: FixtureEnum,
            })
            property!: string;
        }

        const obj = plainToClass(Fixture, {
            property: undefined,
        });
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates null nullable fields with null', () => {
        class Fixture {
            @IsEnum({
                enum: FixtureEnum,
                nullable: true,
            })
            property!: string;
        }

        const obj = plainToClass(Fixture, {
            property: null,
        });
        expect(obj).toHaveProperty('property', null);
    });
    it('populates required fields with value', () => {
        class Fixture {
            @IsEnum({
                enum: FixtureEnum,
            })
            property!: string;
        }

        const obj = plainToClass(Fixture, {
            property: FixtureEnum.Foo,
        });
        expect(obj).toHaveProperty('property', FixtureEnum.Foo);
    });
});
