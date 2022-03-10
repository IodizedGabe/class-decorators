import { plainToClass } from 'class-transformer';

import { IsInteger } from '../is-integer';

describe('IsInteger', () => {
    it('ignores properties that are not exposed', () => {
        class Fixture {
            property!: number;
        }

        const obj = plainToClass(Fixture, {});
        expect(obj).not.toHaveProperty('property');
    });
    it('populates missing required fields with undefined', () => {
        class Fixture {
            @IsInteger({})
            property!: number;
        }

        const obj = plainToClass(Fixture, {});
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates null required fields with undefined', () => {
        class Fixture {
            @IsInteger({})
            property!: number;
        }

        const obj = plainToClass(Fixture, {
            property: null,
        });
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates undefined required fields with undefined', () => {
        class Fixture {
            @IsInteger({})
            property!: number;
        }

        const obj = plainToClass(Fixture, {
            property: undefined,
        });
        expect(obj).toHaveProperty('property', undefined);
    });
    it('populates null nullable fields with null', () => {
        class Fixture {
            @IsInteger({
                nullable: true,
            })
            property!: number;
        }

        const obj = plainToClass(Fixture, {
            property: null,
        });
        expect(obj).toHaveProperty('property', null);
    });
    it('populates string required fields with integer', () => {
        class Fixture {
            @IsInteger({})
            property!: number;
        }

        const obj = plainToClass(Fixture, {
            property: '42',
        });
        expect(obj).toHaveProperty('property', 42);
    });
    it('populates number required fields with number', () => {
        class Fixture {
            @IsInteger({})
            property!: number;
        }

        const obj = plainToClass(Fixture, {
            property: 42,
        });
        expect(obj).toHaveProperty('property', 42);
    });
});
